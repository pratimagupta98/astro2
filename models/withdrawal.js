const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {

        astroId: {
            type: mongoose.Schema.Types.ObjectId, ref: "astrologer"
        },
        status: {
            type: String
        },
        amount: {
            type: Number
        },

        payoutlist: {
            type: mongoose.Schema.Types.ObjectId, ref: "payout"
        }



    },

    { timestamps: true }
);


module.exports = mongoose.model("withdrawal", thisSchema);
