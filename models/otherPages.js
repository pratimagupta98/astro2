const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {


        pageName: { type: String },
        desc: {
            type: String,
        },
        other: {
            type: String
        },
        status:{
            type: String
        }
    },

    { timestamps: true }
);


module.exports = mongoose.model("otherPages", thisSchema);

//alltrade notification