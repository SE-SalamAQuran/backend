const Properity = require("../models/property.model");
const users = require("../models/wishlist.model");
const Appointments = require("../models/appointments.model");
module.exports = {
  getUserAppointment: (req, res) => {
    console.log("trying to fetching");
    const id = req.params.id;
    Appointments.find({ user: id }, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }
    });
  },
  getAllAppointment: (req, res) => {
    console.log("trying to fetching");
    const id = req.params.id;
    Appointments.find({}, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }
    });
  },

  addAppointment: async (req, res) => {
    const user = req.params.id;
    const prop = req.params.prop;
    const { date, time, place } = req.body;
    const appointment = new Appointments({
      place: place,
      date: date,
      time: time,
      property: prop,
      user: user,
    });

    appointment
      .save()
      .then(() => {
        res.status(200).json({
          Status: "Success",
          NewAppointment: appointment,
        });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};
