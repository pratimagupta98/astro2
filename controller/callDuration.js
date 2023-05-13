const callDuration = require("../models/callDuration");
const resp = require("../helpers/apiResponse");

exports.addCallDuration = async (req, res) => {
    const { duration, userId, astroId, status } = req.body;
    const newcallDuration = new callDuration({
        duration: duration,
        userId: userId,
        astroId: astroId,
        status: status
    });
    newcallDuration
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}
exports.intetakeNotification = async (req, res) => {
    await intakeNotification.find().populate("userId").populate("chatIntekId").populate("astroId")
        .sort({ createdAt: -1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};