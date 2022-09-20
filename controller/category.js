const Category = require("../models/category");
const resp = require("../helpers/apiResponse");

exports.addCategory= async (req, res) => {
  const { title,category,desc} = req.body;

  const newCategory= new Category({
    title:title,
    category:category,
    desc:desc,
    
    
   });
   const findexist = await Category.findOne({ title: title });
   if (findexist) {
     resp.alreadyr(res);
   } else {
    newCategory
       .save()
       .then((data) => resp.successr(res, data))
       .catch((error) => resp.errorr(res, error));
   }
 }
 

exports.getContactus = async (req, res) => {
    await Contactus.find()
      .sort({ sortorder: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getoneContactus = async (req, res) => {
    await Contactus.findOne({ _id: req.params.id })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.editContactus = async (req, res) => {
    await Contactus.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.dltContactus = async (req, res) => {
    await Contactus.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  