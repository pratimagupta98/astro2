

const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
 

const {
  match_making_report,
  dailyHoroscope,
  weeklyHoroscope,
  monthlyHoroscope,
  ChineseHoroscope,
  ManglikDosh,
  kalsharpDosh,
  PitriDosh

} = require("../controller/match_making");

 
  
 
 
  router.post("/user/match_making_report", match_making_report);
 router.post("/user/dailyHoroscope", dailyHoroscope);
 router.post("/user/weeklyHoroscope", weeklyHoroscope);
 router.post("/user/monthlyHoroscope", monthlyHoroscope);
 router.post("/user/ChineseHoroscope", ChineseHoroscope);
 router.post("/user/ManglikDosh", ManglikDosh);
 router.post("/user/kalsharpDosh", kalsharpDosh);
 router.post("/user/PitriDosh", PitriDosh);





 

 
 
module.exports = router;
  