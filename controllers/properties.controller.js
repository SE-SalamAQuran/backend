const Properity = require("../models/property.model");

module.exports = {
  getLands: async (req, res) => {
    await Properity.find({ type: "land" }, (err, lands) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(lands);
      }
    });
  },
  getVillas: async (req, res) => {
    await Properity.find(
      { type: "villa", status: "available" },
      (err, villas) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(villas);
        }
      }
    );
  },
};
//2021 alllllllll
