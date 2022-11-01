const express = require("express");
const router = express.Router();
 

const {
    add_chat_intake,
    get_chat_intake,
    getoneContactus,
    editContactus,
    dltContactus
} = require("../controller/chat_intake_form");

 
 
 router.post("/user/add_chat_intake", add_chat_intake);
 router.get("/admin/get_chat_intake", get_chat_intake);
// router.get("/admin/getoneContactus/:id",     getoneContactus)
// router.post("/admin/editContactus/:id",     editContactus);
// router.get("/admin/dltContactus/:id",     dltContactus)


module.exports = router;

