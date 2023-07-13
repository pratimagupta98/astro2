const PujaChkOut = require("../models/checkoutPuja");
const resp = require("../helpers/apiResponse");


exports.add_PoojaChkOut = async (req, res) => {
  const { pujaId, userid, productId, status, type, slots, date, address, desc } = req.body;

  const newPujaChkOut = new PujaChkOut({
    pujaId: pujaId,
    userid: userid,
    productId: productId,
    status: status,
    type: type,
    slots: slots,
    date: date,
    address: address,
    desc: desc
  });

  newPujaChkOut
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
}


exports.userBookedPujalist = async (req, res) => {
  await PujaChkOut.find({ userid: req.params.id }).populate("userid")
    .populate({
      path: "pujaId",
      populate: {
        path: "pooja_type",
      },
    })
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.bookedPujaList = async (req, res) => {
  await PujaChkOut.find().populate("userid")
    .populate({
      path: "pujaId",
      populate: {
        path: "pooja_type",
      },
    })
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.dltBookedPuja = async (req, res) => {
  await PujaChkOut.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.updatePujaStatus = async (req, res) => {
  await PujaChkOut.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.getOneComision = async (req, res) => {
  await Commision.findOne({ _id: req.params.id }).populate("product")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.editComision = async (req, res) => {
  await Commision.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.dltComision = async (req, res) => {
  await Commision.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
