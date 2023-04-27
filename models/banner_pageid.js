const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    bannerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bannerimg",    },
    path: {
      type: String,
     },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("bannr_page", thisSchema);
