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
    
    gstotal:{
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
//console.log()