const Bookevent = require("../models/bookevent");
const resp = require("../helpers/apiResponse");
const ProductDetail = require("../models/bookevent");

exports.add_event = async (req, res) => {

  const { orderId, paymentId, signatureId, event_list, userid, date, country, state, city, orderNote, time_slot, email, mobile } = req.body;


  const newBookevent = new Bookevent({
    orderId: orderId,
    paymentId: paymentId,
    signatureId: signatureId,
    event_list: event_list,
    userid: userid,
    date: date,
    country: country,
    state: state,
    city: city,
    mode: mode,
    address: address,
    email: email,
    mobile: mobile,
    time_slot: time_slot,
    orderNote: orderNote

  });


  newBookevent
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
}



exports.eventlist = async (req, res) => {
  await Bookevent.find().populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.getone_event = async (req, res) => {
  await Bookevent.findOne({ _id: req.params.id }).populate("userid")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.edit_event = async (req, res) => {
  await Bookevent.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.dlt_event = async (req, res) => {
  await Bookevent.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.product_detail = async (req, res) => {
  const { userid, time_slot, pujaId, productId } = req.body;

  const getuser = await Bookevent.findOne({ userid: req.body.userid }).populate("userid")
  // const getProct = await Bookevent.findOne({ pujaId: req.body.pujaId }).populate("pujaId")
  console.log("getuser", getuser)
  console.log("getProct", getProct)

  // const newProductDetail = new ProductDetail({

  //   userid: userid,
  //   pujaId: pujaId,
  //   productId: productId,
  //   time_slot: time_slot,
  // });


  // newProductDetail
  //   .save()
  //   .then((data) => resp.successr(res, data))
  //   .catch((error) => resp.errorr(res, error));
}