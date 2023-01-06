const express = require("express");
const router = express.Router();

const {
    addChatWallet,
    getOneChatWallet,
    addCallWallet
 
} = require("../controller/chatWallet");

//Paths
router.post("/user/addChatWallet", addChatWallet);
router.get("/user/getOneChatWallet/:id", getOneChatWallet);
router.post("/user/addCallWallet", addCallWallet);


 

 
module.exports = router;
