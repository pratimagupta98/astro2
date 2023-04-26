const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const agora = require('agora-access-token');

const {
    make_call, callStatus, call_Status

} = require("../controller/make_call");





router.post("/user/make_call", make_call);
router.get("/user/callStatus", callStatus);
router.get("/user/call_Status", call_Status);

//const agora = require('agora-access-token');

const {
    RtcTokenBuilder,
    RtcRole,
} = agora;

router.get('/videoCall', (req, res) => {
    const generateRtcToken = () => {
        // Rtc Examples
        const appId = '7d1f07c76f9d46be86bc46a791884023';
        const appCertificate = '14cdb5fc04344d0da3270c35d8d75431 ';
        const channelName = 'demo';
        const uid = 0;
        const userAccount = "632da83471b4d7fd47492f03";
        const role = RtcRole.PUBLISHER;

        const expirationTimeInSeconds = 3600

        const currentTimestamp = Math.floor(Date.now() / 1000)

        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

        // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

        // Build token with uid
        const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
        console.log("Token With Integer Number Uid: " + tokenA);

        // Build token with user account
        const tokenB = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, userAccount, role, privilegeExpiredTs);
        console.log("Token With UserAccount: " + tokenB);

        res.status(200).json({
            tokenA: tokenA,
            tokenB: tokenB
        });
    }
    generateRtcToken()
})


module.exports = router;
