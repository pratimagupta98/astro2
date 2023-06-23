const Payout = require("../models/payout");
const resp = require("../helpers/apiResponse");
const Astrologer = require("../models/astrologer");

exports.add_PayOut = async (req, res) => {
  const { astroId, reqsted_amt, transactionId, status } = req.body;
  const tranId = "Tran" + Date.now();

  const newPayout = new Payout({
    astroId: astroId,
    reqsted_amt: reqsted_amt,
    transactionId: tranId,
    status: "Pending"
  });

  newPayout
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
}
//}


exports.PayoutList = async (req, res) => {
  await Payout.find().populate("astroId")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.getonePayout = async (req, res) => {
  await Payout.findOne({ _id: req.params.id }).populate("astroId")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.pay_withdrawal = async (req, res) => {
  //const {id} = req.params
  const getastro = await Payout.findOne({ _id: req.params.id }).populate("astroId")
   const amt = getastro?.astroId
  let asamtt = amt?.ownamount
 const payout =  await Payout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
  const payout_amt = req.body.payout_amt
  const getdata = await Astrologer.findOneAndUpdate(
    {
      _id: amt,
    },
    { $set: { ownamount: payout_amt + asamtt } },
    { new: true }
  )
  if(payout){
     res.status(200).json({
      "status": true,
      "message": "success",
      "data":payout
     })
    }else{
      res.status(400).json({
        "status": false,
        "error": "error",
         
       })
    }
};


exports.dltPayoutlist = async (req, res) => {
  await Payout.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};


