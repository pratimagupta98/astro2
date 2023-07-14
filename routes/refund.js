const express = require("express");
const router = express.Router();
 

const {
    applyforRefund,
    adminRefundList,
    userRefundList,
    getoneRefund,
    updateRefundStatus,
    dltRefund
} = require("../controller/refund");

 
 
 router.post("/user/applyforRefund", applyforRefund);
router.get("/admin/adminRefundList", adminRefundList);
router.get("/user/userRefundList/:id",  userRefundList)
router.get("/admin/getoneRefund/:id",  getoneRefund);
router.post("/admin/updateRefundStatus/:id",  updateRefundStatus);
router.get("/admin/dltRefund/:id",  dltRefund);


module.exports = router;

