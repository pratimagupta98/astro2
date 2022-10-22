const express = require("express");
const router = express.Router();
 

const {
    addtoCart,
    getoneCart
    // faq_list,
    // editprofile,
    // dltFaq
   
} = require("../controller/cart");

 
 
 router.post("/user/addtoCart", addtoCart);
router.get("/user/getoneCart/:id", getoneCart);
// router.get("/admin/dltFaq/:id", dltFaq);

module.exports = router;

