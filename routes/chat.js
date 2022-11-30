const express = require("express");
const router = express.Router();

const {
  addchat,
   
} = require("../controller/chat");

//Paths
router.post("/user/addchat/:id", addchat);
 
module.exports = router;
