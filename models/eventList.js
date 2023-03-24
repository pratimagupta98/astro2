const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
    {
        event_name: {
            type: String,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("eventList", thisSchema);
