const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {

    // userid:{
    //   type: mongoose.Schema.Types.ObjectId, ref: "user"
    // },
    shipping_address: { type: mongoose.Schema.Types.ObjectId, ref: "shipping_address" },
    // customer: { type: String },
     
    astro_product: { type: mongoose.Schema.Types.ObjectId, ref: "consultant" },
 
    gst: {
      type: Number,
    },
    // product_qty: {
    //   type: Number,
    // },
    orderId: {
      type: String,
    },
    // gstotal:{
    //   type: Number,
    //  // default:0  
    // },
    total_amt:{
      type: Number,
     // default:0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
//console.log()