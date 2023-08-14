const Feedback = require("../models/feedback");
const resp = require("../helpers/apiResponse");

exports.addUserFeedback = async (req, res) => {
    const { userId, feedback, comment } = req.body;

    const newFeedback = new Feedback({
        userId: userId,
        comment: comment,
        feedback: feedback
    });

    newFeedback
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}



exports.userFeedback_list = async (req, res) => {
    await Feedback.find({ userId: req.params.id })
        .sort({ sortorder: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.dltFeedback = async (req, res) => {
    await Feedback.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};

