const express = require("express");
const router = express.Router();


const {
    pay_withdrawal, withdrawal_list, getone_withdrawal, dlt_withdrawalList
} = require("../controller/withdrawal");



router.post("/user/pay_withdrawal", pay_withdrawal);
router.get("/user/withdrawal_list", withdrawal_list);

router.get("/user/getone_withdrawal", getone_withdrawal);
router.get("/admin/dlt_withdrawalList/:id", dlt_withdrawalList);

module.exports = router;

