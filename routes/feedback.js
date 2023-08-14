const express = require("express");
const router = express.Router();
 

const {
    addUserFeedback,
    userFeedback_list,
    dltFeedback,
    
   
} = require("../controller/feedback");

 
 
 router.post("/user/addUserFeedback", addUserFeedback);
router.get("/admin/userFeedback_list/:id", userFeedback_list);
router.get("/admin/dltFeedback/:id", dltFeedback);

module.exports = router;

