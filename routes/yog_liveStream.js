const express = require("express");
const router = express.Router();


const {
    goLiveStreaming,
    LiveAstrologer,
    discloseLiveStream


} = require("../controller/yog_liveStream");



router.post("/user/goLiveStreaming", goLiveStreaming);
router.get("/user/LiveAstrologer", LiveAstrologer);
// router.get("/admin/getone_event/:id", getone_event);
router.post("/user/discloseLiveStream/:id", discloseLiveStream);
// router.get("/admin/dlt_event/:id", dlt_event);

module.exports = router;

