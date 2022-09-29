const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      
       rashi_title:{
        type: String, 
       },
      
       desc:{
        type: String, 
    },
    date:{
        type: String, 
    },
       
      },
     
    { timestamps: true }
  );


  module.exports = mongoose.model("rashi", thisSchema);
