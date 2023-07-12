const Admin = require("../models/admin");
const AdminComision = require("../models/admin");
const Astrologer = require("../models/astrologer");
var FCM = require('fcm-node');
const resp = require("../helpers/apiResponse");
//const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const fs = require("fs");

const jwt = require("jsonwebtoken");
const key = "verysecretkey";
const bcrypt = require("bcrypt");
const path = require("path");
//const { func } = require("joi");
const { response } = require("express");
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.addAdmin = async (req, res) => {
  const { name, adminimg, email, mobile, password, cnfmPassword } =
    req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);


  const newAdmin = new Admin({
    name: name,
    password: hashPassword,
    cnfmPassword: hashPassword,
    email: email,
    mobile: mobile,
    adminimg: adminimg,
  });

  const findexist = await Admin.findOne({
    $or: [{ email: email }, { mobile: mobile }],
  });
  if (findexist) {
    resp.alreadyr(res);
  } else {
    if (req.files) {
      if (req.files.adminimg[0].path) {
        alluploads = [];
        for (let i = 0; i < req.files.adminimg.length; i++) {
          const resp = await cloudinary.uploader.upload(
            req.files.adminimg[i].path,
            { use_filename: true, unique_filename: false }
          );
          fs.unlinkSync(req.files.adminimg[i].path);
          alluploads.push(resp.secure_url);
        }
        newAdmin.adminimg = alluploads;
      }
    }
    newAdmin.save()


      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
}

exports.adminlogin = async (req, res) => {
  const { mobile, email, password } = req.body;
  const admin = await Admin.findOne({
    $or: [{ mobile: mobile }, { email: email }],
  });
  if (admin) {
    const validPass = await bcrypt.compare(password, admin.password);
    if (validPass) {
      const token = jwt.sign(
        {
          adminId: admin._id,
        },
        key,
        {
          expiresIn: 365,
        }
      );
      res.header("ad-token", token).status(200).send({
        status: true,
        token: token,
        msg: "success",
        data: admin,
      });
    } else {
      res.status(400).json({
        status: false,
        msg: "Incorrect Password",
        error: "error",
      });
    }
  } else {
    res.status(400).json({
      status: false,
      msg: "admin Doesnot Exist",
      error: "error",
    });
  }
};

exports.viewoneadmin = async (req, res) => {
  await Admin.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.editprofile = async (req, res) => {
  const { name, adminimg, email, mobile, password, cnfmPassword } = req.body

  data = {}
  if (name) {
    data.name = name
  }
  if (adminimg) {
    data.adminimg = adminimg
  }
  if (email) {
    data.email = email
  }
  if (mobile) {
    data.mobile = mobile
  }
  if (password) {
    const salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(password, salt);
    data.password = hashPassword;
  }
  if (cnfmPassword) {
    const salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(password, salt);
    data.cnfmPassword = hashPassword;
  }

  if (req.files) {
    if (req.files.adminimg) {
      alluploads = [];
      for (let i = 0; i < req.files.adminimg.length; i++) {
        // console.log(i);
        const resp = await cloudinary.uploader.upload(req.files.adminimg[i].path, {
          use_filename: true,
          unique_filename: false,
        });
        fs.unlinkSync(req.files.adminimg[i].path);
        alluploads.push(resp.secure_url);
      }
      // newStore.storeImg = alluploads;
      data.adminimg = alluploads;
    }
  }
  await Admin.findOneAndUpdate(
    { _id: req.params.id },
    { $set: data },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.astologerCommision = async (req, res) => {
  const { admincomision } = req.body;

  const newAdminComision = new AdminComision({
    admincomision: admincomision,
  });

  newAdminComision
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));

};


exports.updateComision = async (req, res) => {
  await AdminComision.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );

  let ascom = (100 + req.body.admincomision) / 100;

  console.log("ascom", ascom);

  const getAstroList = await Astrologer.find();

  await Astrologer.updateMany(
    {},
    { $mul: { callCharge: ascom } } // Use $mul to multiply the field
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.viewoneCommision = async (req, res) => {
  await AdminComision.findOne({ _id: "64967ef62cf27fc5dd12416d" })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
}








exports.getAdminEarnings = async (req, res) => {
  const { id } = "64967ef62cf27fc5dd12416d"
  const admin = await AdminComision.findById("64967ef62cf27fc5dd12416d");
  //console.log("admin", admin)
  const report = { today: 0, week: 0, month: 0, total: 0 };

  admin.totalEarning.map((e) => {
    if (e.date.toString().slice(0, 16) == new Date().toString().slice(0, 16)) {
      report.today += e.amount;
    }
    if (
      e.date.toString().slice(0, 16) >=
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toString().slice(0, 16)
    ) {
      report.week += e.amount;
    }
    if (
      e.date.toString().slice(0, 16) >=
      new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toString().slice(0, 16)
    ) {
      report.month += e.amount;
    }
    report.total += e.amount;
  })

  report.today = parseFloat(report.today.toFixed(2));
  report.week = parseFloat(report.week.toFixed(2));
  report.month = parseFloat(report.month.toFixed(2));
  report.total = parseFloat(report.total.toFixed(2));
  // console.log(report)
  res.status(200).json({
    status: true,
    message: "success",
    data: report
  })

};

const sendPushNotification = async (userid, message) => {
  try {
    console.log('USER ID:- ' + userid)
    console.log('message from admin :- ' + message)

    fs.readFile(path.join(__dirname, '../FireBaseConfig.json'), "utf8", async (err, jsonString) => {
      if (err) {
        console.log("Error Reading file from disk", err)
        return err;
      }
      try {
        const data = JSON.parse(jsonString)
        var serverkey = data.SERVER_KEY
        var fcm = new FCM(serverkey)
        var push_tokens = await push_notification.find({
          where: {
            user_id: userId
          }
        })
        var reg_ids = []
        push_tokens.forEach(token => {
          reg_ids.push(token.fcm_token)
        })
        if (reg_ids.length > 0) {
          var pushMessage = {
            registration_ids: reg_ids,
            content_available: true,
            mutable_content: true,
            notification: {
              body: message,
              icon: 'myicon',
              sound: 'sound'
            }
          }
          fcm.send(pushMessage, function (err, apiResponse) {
            if (err) {
              console.log('something has gone wrong!', err)
            } else {
              console.log('push notification sent', response)
            }
          })
        }
      } catch (err) {
        console.log("Error parsing JSON String", err)
      }
    })

  } catch (error) {
    console.log(error)
  }
}