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
  fetcheItem: (req, res) => {
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
  getRoof: async (req, res) => {
    await Properity.find(
      { type: "roof", status: "available" },
      (err, roofs) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(roofs);
        }
      }
    );
  },
  getOfiice: async (req, res) => {
    await Properity.find(
      { type: "office", status: "available" },
      (err, offices) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(offices);
        }
      }
    );
  },
  getShop: async (req, res) => {
    await Properity.find(
      { type: "shop", status: "available" },
      (err, shops) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(shops);
        }
      }
    );
  },

  getApartment: async (req, res) => {
    await Properity.find(
      { type: "apartment", status: "available" },
      (err,  apartments) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(  apartments);
        }
      }
    );
  },





  addProperty: async (req, res) => {
    const owner = req.params.id;

    let newProp = new Properity({
      propertyFor: req.body.transactionType,
      description: req.body.description,
      type: req.body.propertyType,
      city: req.body.city,
      owner: owner,
      address: req.body.location,
      price: req.body.price,
      currency: req.body.currency,
      area: req.body.area,
    });
    await newProp
      .save()
      .then(() => res.json(newProp))
      .catch((error) => res.status(400).send(error));
  },
};
