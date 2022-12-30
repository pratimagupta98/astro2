const express = require("express");
const router = express.Router();

const {
    addChatWallet,
    getOneChatWallet
 
} = require("../controller/chatWallet");

//Paths
router.post("/user/addChatWallet", addChatWallet);
router.get("/user/getOneChatWallet/:id", getOneChatWallet);

 

 
module.exports = router;
