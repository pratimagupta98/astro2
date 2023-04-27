const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
    {

        pooja_type: { type: mongoose.Schema.Types.ObjectId, ref: "poojaList" },

        desc: {
            type: String,
        },
        pooja_price: {
            type: Number,
        },
       city:{
type:String
       },
       liveStreaming:{
           type:Boolean
       },
       available_slots:{
type:String
       },
        duration: {
            type: String,
        },
        benefits: {
            type: String,
        },
        poojaimg: {
            type: Array,

        },
        location:{
            type:String
        },
        fullfill_location:{
            type:String

        },
        

    },
    { timestamps: true }
);

module.exports = mongoose.model("adminAddEvent", thisSchema);
