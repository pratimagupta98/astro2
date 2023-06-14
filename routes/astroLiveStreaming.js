const express = require("express");
const router = express.Router();


const {
    astroLiveStreaming,
    listLiveStreamAstro,
    updateLiveStream,
    disConnectLiveStream,
    UerLiveStreamingToken,
    astro_liveChat,
    liveChat_msgbyastro,
    dltliveChat

} = require("../controller/astroLiveStreaming");



router.post("/user/astroLiveStreaming", astroLiveStreaming);
router.get("/user/listLiveStreamAstro", listLiveStreamAstro);
router.post("/user/UerLiveStreamingToken", UerLiveStreamingToken);
router.post("/user/updateLiveStream/:id", updateLiveStream);
router.get("/user/disConnectLiveStream/:id", disConnectLiveStream);
router.post("/user/astro_liveChat", astro_liveChat);
router.get("/user/liveChat_msgbyastro/:id", liveChat_msgbyastro);
router.get("/user/dltliveChat/:id", dltliveChat);



module.exports = router;

