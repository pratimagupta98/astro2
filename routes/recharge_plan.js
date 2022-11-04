const express = require("express");
const router = express.Router();
//const { verifytoken } = require("../functions/verifytoken");


const {purchase_plan,recharge_list

} = require("../controller/recharge_plan");

//Paths
router.post("/user/purchase_plan", purchase_plan);
 router.get("/user/recharge_list", recharge_list);
// router.get("/user/totalcomment", totalcomment);
// router.get("/user/getonereviewproduct/:id", getonereviewproduct);

 
 


 

module.exports = router;
 