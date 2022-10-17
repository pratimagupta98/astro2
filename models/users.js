const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
  {

    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number
    },
    password: {
      type: String,
    },
    cnfmPassword: {
      type: String,
    },
    userimg: {
      type: Array,
    },
    dob:{type: String},
         otp: { type: String },
         alt_mobile :{
          type: String,
         },
         flat_no:{
          type: String,
         },
         locality:{
          type: String,
         },
         city:{
          type: String,
         },
         state:{
          type: String,
         },
         country:{ type: String,
        },
        pincode:{
          type: String,
        },
        landmark:{
          type: String,
        }

  },




  { timestamps: true }
);


module.exports = mongoose.model("user", thisSchema);
