const Intek = require("../models/chat_intake_form");
const resp = require("../helpers/apiResponse");

exports.add_chat_intake= async (req, res) => {
  const { userid,astroid,gender,tym_of_birth,birth_city,birth_state,birth_country,marital_status,occupation,topic_of_cnsrn,entertopic_of_cnsrn} = req.body;

  const newCatHorscope= new CatHorscope({
 
    userid:userid,
    astroid:astroid,
    gender:gender,
    tym_of_birth:tym_of_birth,
    birth_city:birth_city,
    birth_state:birth_state
    
    
   });
   const findexist = await CatHorscope.findOne({  $and: [{ category:category  }, { rashiId: rashiId }] });
   if (findexist) {
     resp.alreadyr(res);
   } else {
    newCatHorscope
       .save()
       .then((data) => resp.successr(res, data))
       .catch((error) => resp.errorr(res, error));
   }
 }
 

exports.getAll_CatHroscope = async (req, res) => {
    await CatHorscope.find().populate("category").populate("rashiId")
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
  