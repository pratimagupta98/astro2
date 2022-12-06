const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const {
    add_minCharges,
    all_min_recharge,
    dlt_notification
} = require("../controller/min_charges");

 
  
 
 
 router.post("/admin/add_minCharges", add_minCharges);
 router.get("/user/all_min_recharge", all_min_recharge);
// router.get("/admin/dlt_notification/:id", dlt_notification);

module.exports = router;
  