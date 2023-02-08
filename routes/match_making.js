

const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
 

const {
  match_making,
    dailyhoroscope
   

} = require("../controller/match_making");

 
  
 
 
  router.post("/user/match_making", match_making);
 router.post("/user/dailyhoroscope", dailyhoroscope);

  

module.exports = router;
  