const Refund = require("../models/refund");
const resp = require("../helpers/apiResponse");

exports.applyforRefund= async (req, res) => {
  const { userid ,orderid,reason,status} = req.body;

  const newRefund= new Refund({
    userid:userid,
    orderid:orderid,
    reason :reason,
    status:status
   });
   const findexist = await Refund.findOne({
    $and: [{ orderid:orderid}, { userid: userid }]
  });
  if (findexist) {
      resp.alreadyr(res);
  }{
    newRefund
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
  }



  exports.adminRefundList = async (req, res) => {
    try {
      const refunds = await Refund.find()
        .populate("orderid")
        .populate("userid")
        .populate({
          path: "orderid",
          populate: [
            { path: "product" ,
            populate: { path: "product" }, },
            { path: "astroid" },
            {
              path: "cartId",
             // Populate the productid field inside cartId
            },
          ],
        })
        .sort({ sortorder: 1 });
  
      res.status(200).json(refunds);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch refund list" });
    }
  };
  
  exports.userRefundList= async (req, res) => {
    await Refund.find({userid:req.params.id}) .populate("orderid")
    .populate("userid")
    .populate({
      path: "orderid",
      populate: [
        { path: "product" ,
        populate: { path: "product" }, },
        { path: "astroid" },
        {
          path: "cartId",
         // Populate the productid field inside cartId
        },
      ],
    })
    .populate({
        path: "orderid",
        populate: {
          path: "product",
        },
      })
      .populate({
        path: "orderid",
        populate: {
          path: "astroid",
        },
      })
      .sort({ sortorder: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getoneRefund = async (req, res) => {
    await Refund.findOne({ _id: req.params.id }).populate("productid").populate("userid")
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.updateRefundStatus = async (req, res) => {
    await Refund.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.dltRefund = async (req, res) => {
    await Refund.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  