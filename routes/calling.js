const express = require("express");
const router = express.Router();


const {
    voiceCalling

} = require("../controller/calling");



router.post("/user/voiceCalling", voiceCalling);


module.exports = router;

