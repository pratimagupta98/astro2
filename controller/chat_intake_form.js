const Intek = require("../models/chat_intake_form");
const resp = require("../helpers/apiResponse");
const User = require("../models/users");


exports.add_chat_intake= async (req, res) => {
  const { userid,astroid,gender,mobile ,firstname,lastname,dob,date_of_time,birthPlace,marital_status,occupation,topic_of_cnsrn,entertopic_of_cnsrn} = req.body;

  const newIntek = new Intek({
 
    userid:userid,
    astroid:astroid,
    mobile:mobile,
    firstname:firstname,
    lastname:lastname,
    dob:dob,
    date_of_time:date_of_time,
    birthPlace:birthPlace,
    gender:gender,
    marital_status:marital_status,
    occupation:occupation,
    topic_of_cnsrn:topic_of_cnsrn,
    entertopic_of_cnsrn:entertopic_of_cnsrn
    
   });
   const findone = await Intek.findOne({  userid:userid  })
   if (findone) {
    await Intek.findOneAndUpdate(
        {
          _id: req.body.userid,
        },
        { $set: {fullname:req.body.fullname,mobile:req.body.mobile,dob:req.body.dob}},
        { new: true }
      )
        
      newIntek
       .save()
       .then((data) => resp.successr(res, data))
       .catch((error) => resp.errorr(res, error));
   }
  }
  

exports.get_chat_intake = async (req, res) => {
    await Intek.find({astroid:req.params.id}).populate("userid")
      .sort({ createdAt: -1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getone_CatHroscope = async (req, res) => {
    await CatHorscope.findOne({ _id: req.params.id }).populate("category").populate("rashiId")
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.edit_CatHroscope = async (req, res) => {
    await CatHorscope.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.dlt_CatHroscope= async (req, res) => {
    await CatHorscope.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  