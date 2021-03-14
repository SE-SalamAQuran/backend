var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const wishListSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    propType: {
      type: String,
      required: true,
      enum: ["land", "appartment", "shop", "house", "villa", "roof", "office"],
    },
    transType: {
      type: String,
      required: true,
      enum: ["sale-cash", "sale-installment", "rent"],
    },
    city: {
      type: String,
      enum: [
        "Ramallah",
        "Nablus",
        "Hebron",
        "Bethlehem",
        "Tulkarm",
        "Qalqilia",
        "Salfit",
        "Tubas",
        "Jenin",
        "Jericho",
        "Jerusalem",
        "AlBireh",
      ],
    },

    address: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const WishItem = mongoose.model("WishItem", wishListSchema);

module.exports = WishItem;
