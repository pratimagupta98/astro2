const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    userid : {
      type :mongoose.Schema.Types.ObjectId,ref : "user"
    },
    mobile:{
      type: String,
    },
    alt_mobile:{
        type: String,
    },
    // user:[
    //     {
    //         alt_mobile: {type: String}, flat_no:{type:String},locality:{type: String},city:{type:String},state:{ type: String},country:{ type: String},pincode:{type: String},landmark:{type: String,}
    //     },
    //],
    
       flat_no:{
        type: String,
       },
       locality:{
        type: String,
       },
       city:{
        type: String,
       },
       state:{
        type: String,
       },
       country:{ type: String,
      },
      pincode:{
        type: String,
      },
      landmark:{
        type: String,
      },
   name : {
     type: String,
     // require: true,
    },
    email:{
      type: String,
     },
  },
  { timestamps: true }
);

module.exports = mongoose.model("shipping_address", thisSchema);
