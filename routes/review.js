const express = require("express");
const router = express.Router();
//const { verifytoken } = require("../functions/verifytoken");


const {
  addreview,getallreview,totalcomment,totalrating,getavgrating,getonereviewproduct
} = require("../controller/review");

//Paths
router.post("/user/addreview", addreview);
router.get("/user/getallreview", getallreview);
router.get("/user/totalcomment", totalcomment);
router.get("/user/getonereviewproduct/:id", getonereviewproduct);

 
 


 

module.exports = router;
 