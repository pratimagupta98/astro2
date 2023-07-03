const Withdrawal = require("../models/withdrawal");
const resp = require("../helpers/apiResponse");

exports.pay_withdrawal = async (req, res) => {
    const { astroId, status, amount, payoutlist } = req.body;
    const getastro = await 

    console.log("getastro", getastro)
    const newWithdrawal = new Withdrawal({
        astroId: astroId,
        status: status,
        amount: amount,
        payoutlist: payoutlist
    });

    newWithdrawal
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}



exports.withdrawal_list = async (req, res) => {
    await Withdrawal.find().populate("payoutlist").populate("astroId")
        .sort({ sortorder: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.getone_withdrawal = async (req, res) => {
    await Withdrawal.findOne({ _id: req.params.id })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.edit_withdrawal = async (req, res) => {
    await Withdrawal.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        { $set: req.body },
        { new: true }
    )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.dlt_withdrawalList = async (req, res) => {
    await Withdrawal.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};

