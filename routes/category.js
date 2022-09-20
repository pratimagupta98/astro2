const express = require("express");
const router = express.Router();
 

const {
    addCategory,
    
   
} = require("../controller/category");

 
 
 router.post("/admin/addCategory", addCategory);
// router.get("/admin/faq_list", faq_list);
// router.get("/admin/dltFaq/:id", dltFaq);

module.exports = router;

