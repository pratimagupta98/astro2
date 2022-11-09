const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    astroid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "astrologer",
    },
    question: {
      type: String,
    },
    // bannertype: {
    //   type: String,
    // },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Askqus", thisSchema);
