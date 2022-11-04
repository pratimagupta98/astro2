const Recharge = require("../models/recharge_plan");
const Plans = require("../models/plan");

const resp = require("../helpers/apiResponse");

exports.purchase_plan= async (req, res) => {
  const { userid ,planid} = req.body;

  const newRecharge = new Recharge({
    userid:userid,
    planid:planid,
    ttl_amt:req.body.ttl_amt,
    transaction_id: "RE" + Date.now()
     
   });
   const getone = await Plans.findOne({_id : req.body.planid })
   console.log("STRING",getone)

 var amt = getone.amount
 console.log("amt",amt)
   var gstamt = amt*18/100
   console.log("gstAmt",gstamt)
   totalamt=amt+gstamt
   console.log("ttl_amt",totalamt)


    newRecharge
      .save()
      .then((data) => {
        res.status(200).json({
          status: true,
          msg: "success",
          data: data,
          gstAmt:gstamt,
          ttl_amt:totalamt
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error,
        });
      });

    //   .then((data) => resp.successr(res, data))
    //   .catch((error) => resp.errorr(res, error));
  }
  



exports.recharge_list= async (req, res) => {
    await Recharge.find()
      .sort({ sortorder: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getoneRashi = async (req, res) => {
    await Rashi.findOne({ _id: req.params.id })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.updateRashi = async (req, res) => {
    await Rashi.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.dltRashi= async (req, res) => {
    await Rashi.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  