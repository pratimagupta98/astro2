const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const faqSchema = new Schema(
    {


        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        comment: {
            type: String,
        },
        feedback: {
            type: String,
        },

    },

    { timestamps: true }
);


module.exports = mongoose.model("feedback", faqSchema);
