const express = require("express");
const router = express.Router();
 const multer = require("multer");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const { verifytoken } = require("../functions/verifytoken");

const {
    usersignup,
    userlogin,
    myprofile,
    viewoneuser,
    alluser,
    dltuser,
    userVryfyotp,
    getoneusertoken
   
} = require("../controller/users");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //console.log(file);
      let path = `./uploads`;
      if (!fs.existsSync("uploads")) {
        fs.mkdirSync("uploads");
      }
      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

 
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype.includes("jpeg") ||
      file.mimetype.includes("png") ||
      file.mimetype.includes("jpg") ||
       file.mimetype.includes("pdf")
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  let uploads = multer({ storage: storage });
  
  let multipleUpload = uploads.fields([
    { name: "userimg", maxCount: 1 },
   
    //   { name: "storepan_img", maxCount: 5 },
    //   { name: "tradelicence_img", maxCount: 5 },
    //   { name: "companypan_img", maxCount: 5 },
    //   { name: "address_proof_img", maxCount: 5 },
  ]);
  
 
 //PATHS
 
 router.post("/user/usersignup",multipleUpload, usersignup);
 router.post("/user/userVryfyotp", userVryfyotp);

 router.post("/user/userlogin", userlogin);

 router.post("/user/myprofile/:id",multipleUpload, myprofile);
 router.get("/user/viewoneuser/:id", viewoneuser);
 router.get("/user/getoneusertoken",verifytoken, getoneusertoken);

 router.get("/admin/alluser", alluser);
 router.get("/admin/dltuser/:id", dltuser);

module.exports = router;
