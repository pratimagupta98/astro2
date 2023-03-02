const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const {
    make_call,callStatus,call_Status
   
} = require("../controller/make_call");

 
  
 
 
 router.post("/user/make_call", make_call);
 router.get("/user/callStatus", callStatus);
 router.get("/user/call_Status", call_Status);


 

module.exports = router;
 