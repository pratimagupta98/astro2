const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      
       category:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "category",
       },
       rashiId:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "rashi",
       },
       desc:{
        type: String, 
       },
       
      },
     
    { timestamps: true }
  );


  module.exports = mongoose.model("catHoroscope", thisSchema);
