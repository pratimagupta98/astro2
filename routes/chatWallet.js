const express = require("express");
const router = express.Router();

const {
    addChatWallet,
    getOne_Conversation_Wallet,
    addCallWallet,
    addVideoCallWallet
 
} = require("../controller/chatWallet");

//Paths
router.post("/user/addChatWallet", addChatWallet);
router.get("/user/getOne_Conversation_Wallet/:id", getOne_Conversation_Wallet);
router.post("/user/addCallWallet", addCallWallet);
router.post("/user/addVideoCallWallet", addVideoCallWallet);



 

 
module.exports = router;
