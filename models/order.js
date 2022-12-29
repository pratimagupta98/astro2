const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
    {


        cartId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Checkout"
        },
        status: {
            type: String,
            default: "Pending",
            // enum: ["Pending", "complete", "Cancel", "Delivery"]
          },
        razorpay_payment_id: {
            type: String,
        },
        orderId: {
            type: String,
        },
        orderNote:{
            type: String
        },
        date: {
            type: String
        },
         

    },

    { timestamps: true }
);


module.exports = mongoose.model("OrderTable", OrderSchema);
