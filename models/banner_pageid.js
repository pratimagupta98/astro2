const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    bannerid: {
      type: String,
    },
    path: {
      type: String,
     },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("bannr_page", thisSchema);
