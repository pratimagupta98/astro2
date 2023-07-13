const AsLive = require("../models/yog_liveStream");
const resp = require("../helpers/apiResponse");
const agora = require('agora-access-token');
const Astrologer = require("../models/astrologer");
const LiveChat = require("../models/liveChat");
const AppLiveChat = require("../models/applivechat");

exports.goLiveStreaming = async (req, res) => {
    try {
        const { astroId, status, channelName, token } = req.body;
        const findexist = await AsLive.findOne({ astroId: astroId });
        //  console.log(req.body)

        // if the document does not exist, create a new one
        const getastro = await Astrologer.findOne({ _id: req.body.astroId });
        console.log("getastro", getastro)

        const newAsLive = new AsLive({
            astroId: astroId,
            status: status,
            channelName: channelName,
            // name: getastro.fullname,
            token: token
        });

        newAsLive
            .save()
            .then((data) => {
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newAsLive
                    // astroId: astroId,
                    // status: status,
                    // token:token

                })
            })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "An error occurred",
            error: error
        });
    }
}

exports.tokenGenLveStreaming = async (req, res) => {

    const {
        RtcTokenBuilder,
        RtcRole,
    } = agora;

    // const getchnlname = await Astrologer.findOne({ _id: req.body.astroAccount })
    //   console.log("astro", getchnlname)
    const channelName = req.body.channelName
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
    res.status(200).json({
        astroAccount: astroAccount,
        token: tokenA,
        channelName: channelName
    })


}
exports.LiveAstrologer = async (req, res) => {
    try {
        const getdetail = await AsLive.find({ status: true }).populate("astroId").sort({ createdAt: -1 });
        // console.log("getdetail", getdetail)
        // if (getdetail.length > 0) {
        //     const astrologers = getdetail.map(detail => ({
        //         //  astroId: detail.astroId._id,
        //         // status: detail.status,
        //         // name: detail.astroId.fullname,
        //         // img: detail.astroId.img
        //         getdetail: getdetail
        //     }));

        res.status(200).json({
            status: true,
            msg: "success",
            data: getdetail
        });
        // } else {
        //     res.status(404).json({
        //         status: false,
        //         message: "No live astrologer found"
        //     });
        // }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "An error occurred",
            error: error
        });
    }
};

exports.discloseLiveStream = async (req, res) => {
    const getId = await AsLive.deleteOne({ astroId: req.params.astroId })
    console.log("getId", getId)
    await AppLiveChat.deleteMany({ astroid: req.params.astroId })
    if (getId) {
        res.status(200).json({
            status: true,
            msg: "Disconnect Streaming",

        })
    } else {
        res.status(500).json({
            status: false,
            message: "error",
            error: error
        });
    }

};



