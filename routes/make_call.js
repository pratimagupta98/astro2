const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const {
    make_call,
   
} = require("../controller/make_call");

 
  
 
 
 router.post("/user/make_call", make_call);
 

module.exports = router;
 