const Chat = require("../models/chat");
const Chatroom = require("../models/chatroom");
const resp = require("../helpers/apiResponse");
const { v4: uuidv4 } = require("uuid");

exports.addchat = async (req, res) => {
  const uniqueroom = uuidv4();
  const { userid,astroid, msg } = req.body;

  const newChat = new Chat({
    userid: req.params.id,
    astroid:astroid,
    msg: msg,
    roomid: uniqueroom,
    
  });

  const newChatroom = new Chatroom({
    userid: req.params.id,
    astroid:astroid,
    last_msg: msg,
    new_unread_msg: 1,
  });
  const findchatroom = await Chatroom.findOne( { $and: [{ userid: req.params.id }, { astroid:astroid }]} );
  
  console.log("FINDDATA",findchatroom)
  if (findchatroom) {
    newChat.roomid = findchatroom._id;
    let data = {
      new_unread_msg: parseInt(findchatroom.new_unread_msg) + 1,
    };
    // if (!msgbysupport) {
    //   data.last_msg = msg;
    // }
    console.log("DATA",data);
    const updatechat = await Chatroom.findOneAndUpdate(
        {
            $or: [
              { $and: [{ userid: req.params.id }, { astroid: req.body.id }] },
              { $and: [{ astroid: req.body.id }, { userid: req.params.id }] },
            ],
          },
      {
        $set: data,
      },
      { new: true }
    );
    newChat
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  } else {
    const savechat = await newChatroom.save();
    if (savechat) {
      newChat.roomid = savechat._id;
      newChat
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    }
  }
};




exports.add_chatroom = async (req, res) => {
    const uniqueroom = uuidv4();
    const { reciver,sender,astroid, msg, msg_reply } = req.body;
  
    const newChat = new Chat({
      reciver: reciver,
      sender:req.params.id,
      msg_reply: msg_reply,
   //   roomid: uniqueroom,
       
    });
  
    // const newChatroom = new Chatroom({
    //   userid: req.params.id,
    //   astroid:astroid,
    //   last_msg: msg,
    //   new_unread_msg: 1,
    // });
    // const findchatroom = await Chatroom.findOne( { $and: [{ userid: req.params.id }, { astroid:astroid }]} );
    // console.log("FINDDATA",findchatroom)
    // if (findchatroom) {
    //   newChat.roomid = findchatroom._id;
    //   let data = {
    //     new_unread_msg: parseInt(findchatroom.new_unread_msg) + 1,
    //   };
    //   if (!msgbysupport) {
    //     data.last_msg = msg;
    //   }
    //   console.log("DATA",data);
      // const updatechat = await Chatroom.findOneAndUpdate(
      //     {
      //         $or: [
      //           { $and: [{ userid: req.params.id }, { astroid: req.body.id }] },
      //           { $and: [{ astroid: req.body.id }, { userid: req.params.id }] },
      //         ],
      //       },
      //   {
      //     $set: req.body,
      //   },
      //   { new: true }
      // );
      // newChat
      //   .save()
      //   .then((data) => resp.successr(res, data))
      //   .catch((error) => resp.errorr(res, error));
    // } else {
    //   const savechat = await newChatroom.save();
    //   if (savechat) {
    //     newChat.roomid = savechat._id;
    //     newChat
    //       .save()
    //       .then((data) => resp.successr(res, data))
    //       .catch((error) => resp.errorr(res, error));
    //   }

    const findchatroom = await Chatroom.findOne( { $and: [{ userid: reciver }, { astroid:req.params.id }]} );
    console.log("FINDDATA",findchatroom)
    if (findchatroom) {
      newChat.roomid = findchatroom._id;
      let data = {
        new_unread_msg: parseInt(findchatroom.new_unread_msg) + 1,
      };
      // if (!msgbysupport) {
      //   data.last_msg = msg;
      // }
      console.log("DATA",data);
      const updatechat = await Chatroom.findOneAndUpdate(
          {
              $or: [
                { $and: [{ userid: req.params.id }, { astroid: req.body.id }] },
                { $and: [{ sender: req.params.id }, { userid: req.body.id }] },
              ],
            },
        {
          $set: data,
        },
        { new: true }
      );
      newChat
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    }
  }
  
  

exports.allchatwithuser = async (req, res) => {
  //const{roomid} = req.body
    await Chat.find({roomid:req.params.id}).populate("userid").populate("astroid").populate("reciver").populate("sender")
     // .populate("userid").populate("astroid")
      .sort({ createdAt: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getone_chat = async (req, res) => {
    //const{roomid} = req.body
      await Chat.find({$and:[{userid:req.params.id},{astroid:req.params.id}]}).populate("userid").populate("astroid")
       // .populate("userid").populate("astroid")
        .sort({ createdAt: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    };

  exports.userChatList = async (req, res) => {
    //const{roomid} = req.body
      await Chat.find({userid:req.params.id }).populate("userid").populate("astroid")
       // .populate("userid").populate("astroid")
        .sort({ createdAt: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    };

  exports.allchatwithAstro = async (req, res) => {
    await Chat.find({  $or: [{ astroid: req.params.id }, { sender: req.params.id }] })
      .populate("userid").populate("astroid").populate("reciver").populate("sender")
      .sort({ createdAt: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.unreadmessages = async (req, res) => {
    await Chatroom.findOne({ userid: req.params.id })
      .populate("userid")
      .sort({ createdAt: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getallchatrooms = async (req, res) => {
    await Chatroom.find()
      .populate("userid")
      .sort({ updatedAt: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.clearchat = async (req, res) => {
    await Chat.deleteMany({ userid: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };


  exports.markasread = async (req, res) => {
    await Chatroom.findOneAndUpdate(
      { userid: req.params.id },
      {
        $set: { new_unread_msg: 0 },
      },
      { new: true }
    )
      .populate("userid")
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };