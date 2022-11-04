const express = require("express");
const router = express.Router();
 

const {
    addtoCart,
    getoneCart,
    all_transaction_list
    // faq_list,
    // editprofile,
    // dltFaq
   
} = require("../controller/cart");

 
 
 router.post("/user/addtoCart", addtoCart);
router.get("/user/getoneCart/:id", getoneCart);
router.get("/admin/all_transaction_list", all_transaction_list);

// router.get("/admin/dltFaq/:id", dltFaq);

module.exports = router;

