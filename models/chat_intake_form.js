const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    astroid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "astrologer",
    },
    gender: {
      type: String,
    },
    tym_of_birth: {
      type: String,
    },
    birth_city: {
      type: String,
       
    },
    birth_state:{
        type: String,
    },
    birth_country:{
        type: String,
    },
    marital_status:{
        type: String,
    },
    //Single , Married ,Divorced ,Separated ,Widowed
    occupation:{
        type: String,
    },
    // Private Sector ,Govt Sector ,Business/Self Employed ,Civil Services ,Defence  ,Not Working ,Student
    topic_of_cnsrn:{
        type: String,
    },
    // Career and Business ,Marriage ,Love and Relationship ,Wealth and Property ,Education ,Legal Matters ,Child Name Consultation ,Business Name Consultation ,Gem Stone Consultation ,Commodity trading consultation ,Match making ,Birth Time Rectification ,Name Correction Consultation,Travel Abroad Consulation ,Remedy Consultation ,Health Consultation ,Others
    entertopic_of_cnsrn:{
        type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("intakeform", thisSchema);
