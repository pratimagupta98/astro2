

const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const {
    match_horoscope,
   

} = require("../controller/match_making");

 
  
 
 
 router.get("/user/match_horoscope", match_horoscope);
  

module.exports = router;
  