const Product = require("../models/product");
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


exports.addProduct = async (req, res) => {
  //console.log(req.body);
  const { astroId,title,productname,category,image,desc,mrp_price,des_price, status } = req.body;

  const newProduct = new Product({
    astroId:astroId,
    title: title,
    productname: productname,
    category: category,
    image:image,
    desc:desc,
    mrp_price:mrp_price,
    des_price:des_price,
    status:status
  });

  
    const findexist = await Product.findOne({  $and: [{ astroId:astroId  }, { productname: productname }] });
    if (findexist) {
        resp.alreadyr(res);
    } else {
        if (req.files) {
            if (req.files.image[0].path) {
              alluploads = [];
              for (let i = 0; i < req.files.image.length; i++) {
                const resp = await cloudinary.uploader.upload(
                  req.files.image[i].path,
                  { use_filename: true, unique_filename: false }
                );
                fs.unlinkSync(req.files.image[i].path);
                alluploads.push(resp.secure_url);
              }
              newProduct.image = alluploads;
            }
          }
          newProduct.save()
      
      
            .then((data) => resp.successr(res, data))
            .catch((error) => resp.errorr(res, error));
        };
};

exports.getProduct = async (req, res) => {
await Product.find().populate("category").populate("astroId")
.sort({ sortorder: 1 })
.then((data) => resp.successr(res, data))
.catch((error) => resp.errorr(res, error));
};

exports.viewoneProduct = async (req, res) => {
await Product.findOne({ _id: req.params.id }).populate("category").populate("astroId")
.then((data) => resp.successr(res, data))
.catch((error) => resp.errorr(res, error));
};

exports.delproduct = async (req, res) => {
    await Product.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };

 


 
exports.editproduct = async(req,res)=>{
    const{blog_title,blogImg,desc} = req.body
    
    data ={}
    if(blog_title) {
        data.blog_title = blog_title
    }
    if(desc){
        data.desc = desc
    }
  
    if (req.files) {
        if (req.files.blogImg) {
          alluploads = [];
          for (let i = 0; i < req.files.blogImg.length; i++) {
            // console.log(i);
            const resp = await cloudinary.uploader.upload(req.files.blogImg[i].path, {
              use_filename: true,
              unique_filename: false,
            });
            fs.unlinkSync(req.files.blogImg[i].path);
            alluploads.push(resp.secure_url);
          }
          // newStore.storeImg = alluploads;
          data.blogImg = alluploads;
        }
     }
     await Blog.findOneAndUpdate(
        { _id: req.params.id},
        { $set: data },
        { new: true }
      )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    };