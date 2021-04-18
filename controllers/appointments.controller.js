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
    const id = req.params.id;
    Appointments.find({}, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }
    });
  },

  deleteAppointment: (req, res) => {
    appointment.deleteOne({ _id: req.params.id }, function (err) {
      if (!err) {
        res.status(200).send("Deleted Successfully!");
      } else {
        res.status(400).send("Error deleting");
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

    await Appointments.exists(
      { date: date, time: time, property: prop },
      (err, result) => {
        if (result) {
          res.status(403).send("Already exist");
        } else {
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
        }
      }
    );
  },

  
    
};
