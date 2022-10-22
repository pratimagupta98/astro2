const express = require("express");
const router = express.Router();

const { verifytoken } = require("../functions/verifytoken");

const {
    add_shipping_address,
    address_byuser,
  getaddress,
  viewoneuseraddress,
} = require("../controller/shipping_adrss");

//Paths
router.post("/user/add_shipping_address", add_shipping_address);
 router.get("/user/address_byuser/:id", address_byuser);
// router.get("/user/getaddress", verifytoken, getaddress);
// router.get("/user/viewoneuseraddress", verifytoken, viewoneuseraddress);

module.exports = router;
