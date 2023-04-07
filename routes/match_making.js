

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
  time_zone,
  monthly_pancchang,
  lalkitab_horoscope, numerologyApi,
  tomorrowHoroscope,
  basicPanchang

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
router.post("/user/monthly_pancchang", monthly_pancchang);
router.post("/user/lalkitab_horoscope", lalkitab_horoscope);
router.post("/user/numerologyApi", numerologyApi);
router.post("/user/tomorrowHoroscope", tomorrowHoroscope
);
router.post("/user/basicPanchang", basicPanchang);










module.exports = router;
