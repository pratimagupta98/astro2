const Astroproduct = require("../models/astroproduct");
const resp = require("../helpers/apiResponse");

const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
 
const jwt = require("jsonwebtoken");
const key = "verysecretkey";
const bcrypt = require("bcrypt");
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.add_astro_product = async (req, res) => {
  //console.log(req.body);
  const { astroid, product, category ,price} = req.body;

  const newAstroproduct = new Astroproduct({
    astroid: astroid,
    product: product,
    category: category,
    price:price
  });

  
  newAstroproduct.save()
      
      
            .then((data) => resp.successr(res, data))
            .catch((error) => resp.errorr(res, error));
        };
 

exports.product_consltnt_list = async (req, res) => {

await Astroproduct.find({product:req.params.id}) 
.sort({ sortorder: 1 })
.then((data) => resp.successr(res, data))
.catch((error) => resp.errorr(res, error));
};

exports.viewonebanner = async (req, res) => {
await Banner.findOne({ _id: req.params.id })
.then((data) => resp.successr(res, data))
.catch((error) => resp.errorr(res, error));
};

 

exports.delbanner = async (req, res) => {
    await Banner.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };

 



 
 