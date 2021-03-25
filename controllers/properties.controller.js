const Properity = require("../models/property.model");
const wishlist = require("../models/wishlist.model");
const uploader = require("../middleware/upload.multiple");

module.exports = {
  addNewWishItem: (req, res) => {
    const newWishItem = new wishlist({
      user: req.body.user,
      propType: req.body.propertyType,
      transType: req.body.transactionType,
      city: req.body.city,
      address: req.body.address,
    });
    console.log({ newWishItem }),
      newWishItem
        .save()
        .then(() => res.json(newWishItem))
        .catch((error) => res.status(400).send(error));
  },

  deleteWishItem: (req, res) => {
    console.log(req.params.id);
    console.log("trying to delete ");
    wishlist.remove({ _id: req.params.id }, function (err) {
      if (!err) {
        return res.send("wishlist deleted!");
      } else {
        return res.send("Error deleting wishList!");
      }
    });
  },

  fetcheWishlList: (req, res) => {
    console.log("trying to fetching");
    const id = req.params.id;
    wishlist.find({ user: id }, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }
    });
  },

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
