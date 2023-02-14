

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
  PitriDosh,
  geo_detail,
  time_zone

} = require("../controller/match_making");

 
  
 
 
  router.post("/user/match_making_report", match_making_report);
 router.post("/user/dailyHoroscope", dailyHoroscope);
 router.post("/user/weeklyHoroscope", weeklyHoroscope);
 router.post("/user/monthlyHoroscope", monthlyHoroscope);
 router.post("/user/ChineseHoroscope", ChineseHoroscope);
 router.post("/user/ManglikDosh", ManglikDosh);
 router.post("/user/kalsharpDosh", kalsharpDosh);
 router.post("/user/PitriDosh", PitriDosh);
 router.post("/user/geo_detail", geo_detail);
 router.post("/user/time_zone", time_zone);







 

 
 
module.exports = router;
  