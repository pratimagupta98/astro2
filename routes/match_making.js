

const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
 

const {
  match_making_report,
  dailyHoroscope,
  weeklyHoroscope,
  monthlyHoroscope,
  ChineseHoroscope

} = require("../controller/match_making");

 
  
 
 
  router.post("/user/match_making_report", match_making_report);
 router.post("/user/dailyHoroscope", dailyHoroscope);
 router.post("/user/weeklyHoroscope", weeklyHoroscope);
 router.post("/user/monthlyHoroscope", monthlyHoroscope);
 router.post("/user/ChineseHoroscope", ChineseHoroscope);




 
 
module.exports = router;
  