const Askqustion = require("../models/ASK_qus");
const resp = require("../helpers/apiResponse");
const Product = require("../models/product");

exports.user_ask_qus = async (req, res) => {
  const { astroid, userid, question, answer, bundleOffer } = req.body;

  const questions = await Askqustion.findOne({ userid: userid });
  console.log("string", question.length)
  const product = await Product.findOne({ _id: bundleOffer })
  console.log("product", product)
  if (question.length >= product.qsCount) {
    console.log("your question limit over")
    res.status(200).json({
      msg: "Your Question limit is Over"
    })
  } else {
    const newAskqustion = new Askqustion({
      astroid: astroid,
      userid: userid,
      question: question,
      answer: answer,
      bundleOffer: bundleOffer
    });

    newAskqustion
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
}

exports.user_ask_qus_list = async (req, res) => {
  await Askqustion.find({})
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.list_ask_qus = async (req, res) => {
  await Askqustion.find({ $and: [{ astroid: req.params.astroid }, { userid: req.params.userid }] }).populate("astroid").populate("userid")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.astro_ques_list = async (req, res) => {
  await Askqustion.find({ astroid: req.params.id }).populate("astroid").populate("userid")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.getone_ask_qus = async (req, res) => {
  await Askqustion.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


// userId: req.params.userId,
// plan_Id: req.params.id,

exports.reply = async (req, res) => {
  const getlimit = await Askqustion.find({ _id: req.params.id }).populate("bundleOffer")
  console.log("getlimit", getlimit)
  let limit = getlimit.bundleOffer
  console.log("limit", limit)
  await Askqustion.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.dlt_ask_qus = async (req, res) => {
  await Askqustion.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};


