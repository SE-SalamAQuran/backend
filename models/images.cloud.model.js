const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "property",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Images", imagesSchema);
