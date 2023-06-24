const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const {
    add_PayOut,
    PayoutList,
    getonePayout,
    pay_withdrawal,
    dltPayoutlist,
    approvedPayoutList,
    astroApprovedPayouT,
    astroPendingPayouT
} = require("../controller/payout");



router.post("/user/add_PayOut", add_PayOut);
router.get("/user/PayoutList", PayoutList);
router.get("/admin/approvedPayoutList", approvedPayoutList);
router.get("/admin/astroApprovedPayouT/:astroId", astroApprovedPayouT);
router.get("/admin/astroPendingPayouT/:astroId", astroPendingPayouT);
router.get("/user/getonePayout/:id", getonePayout);
router.post("/admin/pay_withdrawal/:id", pay_withdrawal);

router.get("/admin/dltPayoutlist/:id", dltPayoutlist);




module.exports = router;
