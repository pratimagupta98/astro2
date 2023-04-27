const BannerPage = require("../models/banner_pageid");
//const HomeBanner = require("../models/home_banner.js");

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


exports.add_bannerPageId = async (req, res) => {
  //console.log(req.body);
  const { bannrId, path } = req.body;

  const newBannerPage = new BannerPage({
    bannrId: bannrId,
    path: path,
   
  });

   
       
      
  newBannerPage.save()
      
      
            .then((data) => resp.successr(res, data))
            .catch((error) => resp.errorr(res, error));
        };

 

exports.get_bannerPageId = async (req, res) => {
  await BannerPage.find()
  .sort({ sortorder: 1 })
  .then((data) => resp.successr(res, data))
  .catch((error) => resp.errorr(res, error));
  };

 

exports.viewone_bannerPageId = async (req, res) => {
await BannerPage.findOne({ _id: req.params.id })
.then((data) => resp.successr(res, data))
.catch((error) => resp.errorr(res, error));
};

 

exports.delbannerPageId = async (req, res) => {
    await BannerPage.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };


exports.editBannerPageId = async(req,res)=>{
    const{bannrId,bannerPage} = req.body
    await BannerPage.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body },
        { new: true }
      )    

        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    };


   

  