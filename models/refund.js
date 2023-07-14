const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RefundSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'consultant'
    },


    reason: {
        type: String
    },

    status: {
        type: String,

    },


},
    { timestamps: true }
);
module.exports = mongoose.model("refund", RefundSchema);


