const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const {
    AddOrder,
     myOrders,
   getoneOrder,
    // dltplan,
    editOrder,
    // active_plans
} = require("../controller/order");


 
 router.post("/user/AddOrder", AddOrder);
 router.get("/user/myOrders/:id", myOrders);
// router.get("/user/active_plans", active_plans);

router.get("/user/getoneOrder/:id", getoneOrder);
 router.post("/admin/editOrder/:id", editOrder);

// router.get("/admin/dltplan/:id", dltplan);

module.exports = router;
 