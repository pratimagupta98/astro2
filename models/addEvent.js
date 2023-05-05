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
//        available_slots:{
// type:String
//        },
 time_slots: [{
      type: String,
    }],
//   time_slots: {
//       type: Array
//   },
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
        mode:{
            type:String
        },
        // product: [
        //     {
        //       img :{ type: String},name:{type : String},price:{type : String},description:{type :String},qty:{type : Number}
        //     },
        //   ],

          product: [{
            type: Object,
           // ref: "language"
        }],
// product:{
//     type :Array
// },
// product : [    {"img": "", "name": "puja samgri", "price": 299, "description": "hdfjdf"}]

//     },
    // product: [
    //    // {img: String, name: String, price: Number, description: String}
    //      {img: '', name: 'Product 2', price: 20, description: 'Description 2'},
    //     // {img: 'img3.jpg', name: 'Product 3', price: 30, description: 'Description 3'}
    //   ],
    // product: {
    //   type: Object,
    // },
    product: [{
        name: { type: String, default: ''},
        description: { type: String, default: '', trim: true },
        price: { type: Number, default: '', trim: true },
        image: { type: String, default: '', trim: true }

    }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("adminAddEvent", thisSchema);
