const AsLive = require("../models/astroLiveStreaming");
const resp = require("../helpers/apiResponse");
const agora = require('agora-access-token');
const Astrologer = require("../models/astrologer");

// exports.astroLiveStreaming = async (req, res) => {
//     const { astroId, status } = req.body;
//     const newAsLive = new AsLive({
//         astroId: astroId,
//         status: status
//     });
//     newAsLive
//         .save()
//         .then((data) => resp.successr(res, data))
//         .catch((error) => resp.errorr(res, error));
// }
exports.listLiveStreamAstro = async (req, res) => {
    await AsLive.find({ status: true }).populate("astroAccount")
        .sort({ createdAt: -1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.updateLiveStream = async (req, res) => {
    await AsLive.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        { $set: req.body },
        { new: true }
    )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.astroLiveStreaming = async (req, res) => {

    const {
        RtcTokenBuilder,
        RtcRole,
    } = agora;

    const getchnlname = await Astrologer.findOne({ _id: req.body.astroAccount })
    console.log("astro", getchnlname)
    const channelName = getchnlname.channelName
    const generateRtcToken = () => {
        const appId = '7d1f07c76f9d46be86bc46a791884023';
        const appCertificate = '14cdb5fc04344d0da3270c35d8d75431';
        const uid = 0;
        const { astroAccount } = req.body;
        const expirationTimeInSeconds = 36000;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
        const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, astroAccount, privilegeExpiredTs);
        //  console.log("Token With Integer Number Uid: " + tokenA);
        //  console.log("tokenA", channelName);
        return tokenA;
    }

    const tokenA = await generateRtcToken();
    // console.log("tokenA", tokenA)
    const { astroAccount, status, token } = req.body
    const newAsLive = new AsLive({
        astroAccount: astroAccount,
        status: status,
        token: tokenA,
        channelName: channelName

    })
    // const findexist = await AsLive.findOne({ astroAccount: astroAccount });
    // if (findexist) {
    // resp.alreadyr(res);
    //  console.log("BODY", newAsLive)
    //   }
    // else {
    newAsLive
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    // }
    // res.status(200).json({
    //   astroAccount: tokenA,

    // });
}