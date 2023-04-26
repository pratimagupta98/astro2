const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
    {

        pooja_type: { type: mongoose.Schema.Types.ObjectId, ref: "poojalist" },

        desc: {
            type: String,
        },
        price_online: {
            type: Number,
        },
        price_offline: {
            type: Number,
        },
        duration: {
            type: String,
        },
        benefits: {
            type: String,
        },
        poojaimg: {
            type: Array,

        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("adminAddEvent", thisSchema);
