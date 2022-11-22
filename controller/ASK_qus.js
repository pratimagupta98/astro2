const Askqustion = require("../models/ASK_qus");
const resp = require("../helpers/apiResponse");

exports.user_ask_qus = async (req, res) => {
  const { astroid,userid,question,answer} = req.body;

  const newAskqustion = new Askqustion({
    astroid:astroid,
    userid:userid,
    question:question,
    answer:answer
    
   });
   
   newAskqustion
       .save()
       .then((data) => resp.successr(res, data))
       .catch((error) => resp.errorr(res, error));
   }
 
 

exports.user_ask_qus_list = async (req, res) => {
    await Askqustion.find({})
      .sort({ createdAt: -1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.list_ask_qus = async (req, res) => {
    await Askqustion.find({ $and: [{ astroid: req.params.astroid }, { userid: req.params.userid }] })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  // userId: req.params.userId,
  // plan_Id: req.params.id,

  exports.editCategory = async (req, res) => {
    await Category.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.dltCategory= async (req, res) => {
    await Category.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  