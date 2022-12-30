const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    userid: { type: Schema.Types.ObjectId, ref: "user" },
    astroid:{type: Schema.Types.ObjectId, ref: "astrologer"},
    recharge_planId: {
        type: Schema.Types.ObjectId, ref: "minCharge",
    },
    
    

  },
  { timestamps: true }
);

module.exports = mongoose.model("chatWallet", thisSchema);
