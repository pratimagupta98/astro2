const express = require("express");
const router = express.Router();
 

const {
    addCategory,
    our_product_consltnt,
    getoneCategory,
    editCategory,
    dltCategory
   
} = require("../controller/astroproduct");

 
 
 router.post("/admin/add_astro_product", add_astro_product);
 router.get("/admin/our_product_consltnt", our_product_consltnt);
 router.get("/admin/getoneCategory/:id", getoneCategory);
 router.post("/admin/editCategory/:id", editCategory);
 router.get("/admin/dltCategory/:id", dltCategory);

module.exports = router;

