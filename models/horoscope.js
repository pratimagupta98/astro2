const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      
       title:{
        type: String, 
       },
       shortDesc:{
        type: String, 
       },
       rashiName:{
        type: String, 
       },
       rashidesc:{
        type: String, 
       },
       
      },
     
    { timestamps: true }
  );


  module.exports = mongoose.model("category", thisSchema);
