const CatHorscope = require("../models/catHoroscope");
const resp = require("../helpers/apiResponse");

exports.adCat_horscope= async (req, res) => {
  const { category,rashiId,desc} = req.body;

  const newCatHorscope= new CatHorscope({
 
    category:category,
    rashiId:rashiId,
    desc:desc,
    
    
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
  