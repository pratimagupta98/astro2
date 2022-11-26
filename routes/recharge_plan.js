const express = require("express");
const router = express.Router();
//const { verifytoken } = require("../functions/verifytoken");


const {purchase_plan,recharge_list,add_custome_amt

} = require("../controller/recharge_plan");

//Paths
router.post("/user/purchase_plan", purchase_plan);
 router.get("/user/recharge_list", recharge_list);
// router.get("/user/totalcomment", totalcomment);
// router.get("/user/getonereviewproduct/:id", getonereviewproduct);

router.post("/user/add_custome_amt", add_custome_amt);

 


 

module.exports = router;
 