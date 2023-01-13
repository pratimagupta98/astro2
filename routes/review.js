const express = require("express");
const router = express.Router();
//const { verifytoken } = require("../functions/verifytoken");


const {
  addreview,allRevieAstro,totalcomment,totalrating,getavgrating,getonereviewproduct
} = require("../controller/review");

//Paths
router.post("/user/addreview", addreview);
router.get("/user/allRevieAstro/:id", allRevieAstro);
router.get("/user/totalcomment", totalcomment);
router.get("/user/getonereviewproduct/:id", getonereviewproduct);

 
 


 

module.exports = router;
 