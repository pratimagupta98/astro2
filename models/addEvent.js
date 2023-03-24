const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
    {

        event_list: { type: mongoose.Schema.Types.ObjectId, ref: "eventList" },

        desc: {
            type: String,
        },
        price_online: {
            type: Number,
        },
        price_offline: {
            type: Number,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("adminAddEvent", thisSchema);
