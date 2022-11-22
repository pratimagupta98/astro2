
const express = require("express");
const router = express.Router();
 

const {
    user_ask_qus,
    list_ask_qus
    
   
} = require("../controller/ASK_qus");

 
 
 router.post("/user/user_ask_qus", user_ask_qus);
 router.get("/user/list_ask_qus/:astroid/:userid", list_ask_qus);

// router.get("/admin/faq_list", faq_list);
// router.get("/admin/dltFaq/:id", dltFaq);

module.exports = router;










