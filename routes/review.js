const express = require("express");
const router = express.Router();
//const { verifytoken } = require("../functions/verifytoken");


const {
  addChatReview,addCallReview,addVideoreview,allRevieAstro,totalcomment,totalrating,getavgrating,getonereviewproduct
} = require("../controller/review");

//Paths
router.post("/user/addChatReview", addChatReview);
router.post("/user/addCallReview", addCallReview);
router.post("/user/addVideoreview", addVideoreview);

router.get("/user/allRevieAstro/:id", allRevieAstro);
router.get("/user/totalcomment", totalcomment);
router.get("/user/getonereviewproduct/:id", getonereviewproduct);

 
 


 

module.exports = router;
 