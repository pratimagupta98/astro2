const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      
       title:{
        type: String, 
       },
      
       amount:{
        type: Number,
    },
     
       
      },
     
    { timestamps: true }
  );


  module.exports = mongoose.model("plan", thisSchema);
