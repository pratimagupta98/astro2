const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      Sid:{
        type: String, 
      },
      From:{
        type: Number, 
       },
       To:{
        type: Number, 
       },
       CallerId:{
        type: String, 
       },
       CallerType:{
        type: String, 
       },
       Status:{
        type: String,
       },
       StartTime:{
        type: String,
       },
       EndTime:{
        type: String,
       },
       Duration:{
        type: String,
       },
       Price:{
        type: String,
       },
       RecordingUrl:{
        type: String,
       }
       
      },
     
    { timestamps: true }
  );


  module.exports = mongoose.model("makeCall", thisSchema);
