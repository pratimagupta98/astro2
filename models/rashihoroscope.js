const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      
        title:{
        type: String, 
       },
      
       sort_desc:{
        type: String, 
    },
    long_desc:{
        type: String, 
    },
    rashiId:[{
        type: mongoose.Schema.Types.ObjectId,
      ref: "rashi",
    }],
       
      },
     
    { timestamps: true }
  );


  module.exports = mongoose.model("rashiHcpe", thisSchema);
