// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    pooja_type: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    pooja_price: {
        type: Number,
        //  required: true
    },
    city: {
        type: String,
        // required: true
    },
    liveStreaming: {
        type: Boolean,
        //  default: true
    },
    time_slots: {
        type: Array,
        // required: true
    },
    location: {
        type: String,
        //  required: true
    },
    fullfill_location: {
        type: String,
        // required: true
    },
    benefits: {
        type: Array,
        //  required: true
    },
    mode: {
        type: String,
        //required: true
    },
    product: [{
        name: {
            type: String,
            //  required: true
        },
        description: {
            type: String,
            // required: true
        },
        price: {
            type: Number,
            // required: true
        },
        image: {
            type: String,
            // required: true
        }
    }]
});

module.exports = mongoose.model('adminAddEvent', eventSchema);
