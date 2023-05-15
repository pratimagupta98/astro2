const express = require("express");
const router = express.Router();


const {
    astroLiveStreaming,
    listLiveStreamAstro,
    updateLiveStream


} = require("../controller/astroLiveStreaming");



router.post("/user/astroLiveStreaming", astroLiveStreaming);
router.get("/admin/listLiveStreamAstro", listLiveStreamAstro);
// router.get("/admin/getone_event/:id", getone_event);
router.post("/admin/updateLiveStream/:id", updateLiveStream);
// router.get("/admin/dlt_event/:id", dlt_event);

module.exports = router;

