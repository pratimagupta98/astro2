const Intek = require("../models/chat_intake_form");
const resp = require("../helpers/apiResponse");
const User = require("../models/users");


exports.add_chat_intake = async (req, res) => {
  const { userid, astroid, gender, mobile, firstname, p_firstname, lastname, p_lastname, dob, p_dob, date_of_time, p_date_of_time, birthPlace, p_birthPlace, marital_status, occupation, topic_of_cnsrn, entertopic_of_cnsrn } = req.body;

  const newIntek = new Intek({
    userid: userid,
    astroid: astroid,
    mobile: mobile,
    firstname: firstname,
    p_firstname: p_firstname,
    lastname: lastname,
    p_lastname: p_lastname,
    dob: dob,

    p_dob: p_dob,
    date_of_time: date_of_time,
    p_date_of_time: p_date_of_time,
    birthPlace: birthPlace,
    p_birthPlace: p_birthPlace,
    gender: gender,
    marital_status: marital_status,
    occupation: occupation,
    topic_of_cnsrn: topic_of_cnsrn,
    entertopic_of_cnsrn: entertopic_of_cnsrn

  });
  const findone = await Intek.findOne({ userid: userid })
  if (findone) {
    await Intek.findOneAndUpdate(
      {
        userid: req.body.userid,
      },
      { $set: req.body },
      { new: true }
    )

    newIntek
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  } else {
    newIntek
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
}


exports.intekListByastro = async (req, res) => {
  await Intek.find({ astroid: req.params.id }).populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.get_chat_intake = async (req, res) => {
  await Intek.find().populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.getone_user_chatintek = async (req, res) => {
  await Intek.findOne({ userid: req.params.id }).populate("userid")
    //.populate("category").populate("rashiId")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.edit_CatHroscope = async (req, res) => {
  await CatHorscope.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.dlt_ChatIntek = async (req, res) => {
  await Intek.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.intekListByUser = async (req, res) => {
  await Intek.find({ userid: req.params.id }).populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.intekListforApp = async (req, res) => {
  await Intek.find({ userid: req.params.id }).populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.intekListforCall = async (req, res) => {
  await Intek.find({ userid: req.params.id }).populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.intekListforVideo = async (req, res) => {
  await Intek.find({ userid: req.params.id }).populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};