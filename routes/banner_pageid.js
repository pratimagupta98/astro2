const express = require("express");
const router = express.Router();
 

const {
    add_bannerPageId,
    get_bannerPageId,
    viewone_bannerPageId,
    editBannerPageId,
    delbannerPageId

} = require("../controller/banner_pageid");

 
 
 router.post("/admin/add_bannerPageId", add_bannerPageId);
 router.get("/user/get_bannerPageId", get_bannerPageId);
 router.get("/admin/viewone_bannerPageId/:id", viewone_bannerPageId);
 router.post("/admin/editBannerPageId/:id", editBannerPageId);
 router.get("/admin/delbannerPageId/:id", delbannerPageId);

module.exports = router;

