let express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  path = require("path");
const { ResumeToken } = require("mongodb");
const { MulterError } = require("multer");
var multer = require("multer");

const DIR = "../public/properties";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "video/mp4"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .mp4, .jpg and .jpeg format allowed!"));
    }
  },
});

const Property = require("../models/property.model");

router.post(
  "/new/property/:id",
  upload.array("images", 6),
  async (req, res) => {
    const owner = req.params.id;
    const url = req.protocol + "://" + req.get("host") + "/";

    const {
      propertyFor,
      description,
      type,
      city,
      address,
      price,
      currency,
      classification,
      area,
    } = req.body;
    var imgPath = url + "public/properties/" + req.files[0].filename;
    var images = [];
    let i;
    for (i = 0; i < req.files.length; i++) {
      images.push(url + "public/properties" + req.files[i].filename);
    }
    let newProp = new Property({
      propertyFor: propertyFor,
      description: description,
      type: type,
      city: city,
      owner: owner,
      address: address,
      price: price,
      currency: currency,
      classification: classification,
      area: area,
      imgPath: imgPath,
      images: images,
    });
    await newProp
      .save()
      .then(res.json(newProp))
      .catch((error) => {
        res.status(400).send(error);
      });
  }
);

module.exports = router;
