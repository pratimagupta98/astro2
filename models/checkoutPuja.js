const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
     
       pujaId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminAddEvent"},
        userid:{  type: mongoose.Schema.Types.ObjectId, ref: "user"},

       productId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminAddEvent"}],
        status:{
          type:String,
          default:"Pending"
        },
        type:{
          type:String,
          
        },
        slots:{
          type:String,
          
        },
        date:{
          type:String,
        },
        address:{
          type:String,
        },
desc:{
  type:String,
},
totalamt:{
  type:Number
},
       
      },
     

      // product: [
      //   {
      //     product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      //     sku: { type: Number },
      //     hsn: { type: Number },
      //     gst: { type: Number },
      //     qty: { gst: Number },
      //     amount: { gst: String },
       
     
    { timestamps: true }
  );


  module.exports = mongoose.model("chkoutPuja", thisSchema);
