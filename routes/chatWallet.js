const express = require("express");
const router = express.Router();

const {
    addChatWallet,
    getChatWallet
 
} = require("../controller/chatWallet");

//Paths
router.post("/user/addChatWallet", addChatWallet);
router.get("/user/getChatWallet/:id", getChatWallet);

 

 
module.exports = router;
