var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    propertyFor: {
      type: String,
      required: true,
      enum: ["sale-cash", "sale-installment", "rent"],
    },
    description: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ["land", "apartment", "shop", "house", "villa", "roof", "office"],
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

    price: {
      type: Number,
    },

    currency: {
      type: String,
      enum: ["USD", "JOD", "ILS"],
      default: "USD",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    status: {
      type: String,
      default: "available",
      enum: ["available", "sold", "rented", "expired"],
    },
    classification: {
      type: String,
      enum: ["A", "B", "C"],
    },
    area: {
      type: Number,
      trim: true,
      required: true,
    },
    images: {
      type: [String],
    },
    imgPath: {
      type: String,
    },
  },
  { timestamps: true }
);

const Properties = mongoose.model("Properties", propertySchema);

module.exports = Properties;
