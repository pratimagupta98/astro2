const express = require("express");
const router = express.Router();
 

const {
    add_astro_product,
    product_consltnt_list,
    productlist,
    editCategory,
    dltCategory

} = require("../controller/astroproduct");

 
 
 router.post("/user/add_astro_product", add_astro_product);
  router.get("/user/product_consltnt_list/:id", product_consltnt_list);
  router.get("/user/productlist/:id", productlist);
//  router.post("/admin/editCategory/:id", editCategory);
//  router.get("/admin/dltCategory/:id", dltCategory);

module.exports = router;

