const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    astroId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "astrologer",
    },
    image: {
      type: Array,
     },
     video:{
        type:Array
     }
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("astroGallery", thisSchema);
