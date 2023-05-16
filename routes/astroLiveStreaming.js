const express = require("express");
const router = express.Router();


const {
    astroLiveStreaming,
    listLiveStreamAstro,
    updateLiveStream,
    disConnectLiveStream


} = require("../controller/astroLiveStreaming");



router.post("/user/astroLiveStreaming", astroLiveStreaming);
router.get("/user/listLiveStreamAstro", listLiveStreamAstro);
// router.get("/admin/getone_event/:id", getone_event);
router.post("/user/updateLiveStream/:id", updateLiveStream);
router.get("/user/disConnectLiveStream/:id", disConnectLiveStream);

module.exports = router;

