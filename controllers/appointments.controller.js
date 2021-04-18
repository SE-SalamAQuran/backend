const Properity = require("../models/property.model");
const users = require("../models/wishlist.model");
const appointment = require("../models/appointments.model");
module.exports = {

    getUserAppointment : (req, res) => {
        console.log("trying to fetching");
        const id = req.params.id;
        appointment.find({user : id }, (err, result) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.json(result);
          }
        });
      },
      getAllAppointment : (req, res) => {
        console.log("trying to fetching");
        const id = req.params.id;
        appointment.find({}, (err, result) => {
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


};