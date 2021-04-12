const { time } = require("faker");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "property",
    },
    date: {
      type: String,
      default: Date.now,
    },
    time: {
      type: String,
    },
    place: {
      type: String,
    },
  },
  { timestamps: true }
);

const Appointments = mongoose.model("Appointments", appointmentsSchema);

module.exports = Appointments;
