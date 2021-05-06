const Properity = require("../models/property.model");
const wishlist = require("../models/wishlist.model");
const Images = require("../models/images.cloud.model");

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
    wishlist.deleteOne({ _id: req.params.id }, function (err) {
      if (!err) {
        res.status(200).send("Deleted Successfully!");
      } else {
        res.status(400).send("Error deleting");
      }
    });
  },
  deletemyProperties: (req, res) => {
    Properity.deleteOne({ _id: req.params.id }, function (err) {
      if (!err) {
        res.status(200).send("Deleted Successfully!");
      } else {
        res.status(400).send("Error deleting");
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
  fetcheWishlList1: (req, res) => {
    console.log("trying to fetching");
    const id = req.params.id;
    wishlist.find({}, (err, result) => {
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

  getproperty: (req, res) => {
    const id = req.params.id;
    Properity.findOne({ _id: id }, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }
    });
  },
  getuserproperty: (req, res) => {
    const id = req.params.id;
    Properity.find({ owner: id }, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }
    });
  },
  getLands: async (req, res) => {
    await Properity.find(
      { type: "land", status: "available" },
      (err, lands) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(lands);
        }
      }
    );
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
  getOffice: async (req, res) => {
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
      (err, apartments) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(apartments);
        }
      }
    );
  },

  getHouse: async (req, res) => {
    await Properity.find(
      { type: "house", status: "available" },
      (err, houses) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(houses);
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
      address: req.body.city,
      price: req.body.price,
      currency: req.body.currency,
      area: req.body.area,
    });
    await newProp
      .save()

      .then(() => res.json(newProp))
      .catch((error) => res.status(400).send(error));

    wishlist.find(
      { propType: req.body.propertyType },
      { city: req.body.city },
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        } else {
          console.log(result.data.user);
        }
      }
    );
  },
  updatePath: async (req, res) => {
    const id = req.params.id;
    Images.findOne({ property: id }, (err, image) => {
      if (err) {
        res.status(404).json({
          Error: err,
          Message: "Can't find this image",
        });
      } else {
        Properity.findOneAndUpdate(
          { _id: id },
          { imgPath: image.image },
          (error, result) => {
            if (error) {
              res.status(400).send(error);
            } else {
              res.json({
                Status: "Uploaded Image Successfully",
                Message: `This is the new path ${result.imgPath}`,
              });
            }
          }
        );
      }
    });
  },
  getImages: async (req, res) => {
    let id = req.params.id;

    await Images.find({ property: id }, (err, result) => {
      if (err) {
        res.status(404).json({
          Error: err,
          Message: "Not found",
        });
      } else {
        res.status(200).json({
          images: result,
        });
      }
    });
  },
  getFilteredProps: async (req, res) => {
    await Properity.find({
      status: "available",
      type: req.params.type,
      city: req.params.location,
      propertyFor: req.params.transactionType,
    })
      .where("area")
      .gte(req.params.minArea)
      .lte(req.params.maxArea)
      .where("price")
      .gte(req.params.minPrice)
      .lte(req.params.maxPrice)
      .exec((err, result) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(result);
        }
      });
  },
};
