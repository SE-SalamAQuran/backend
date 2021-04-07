let express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  path = require("path");
const { ResumeToken } = require("mongodb");
const { MulterError } = require("multer");
var multer = require("multer");

const DIR = "../public";

const storageProp = new multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});

var uploadProp = new multer({
  storage: storageProp,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .mp4, .jpg and .jpeg format allowed!"));
    }
  },
});

const Property = require("../models/property.model");

router.patch("/new/:id", uploadProp.array("images",6), async (req, res) => {
  const id = req.params.id;
  //   const url = req.protocol + "://" + req.get("host") + "/";
  //   var images = [];

  //   for (var i = 0; i < req.files.length; i++) {
  //     images.push(url + "public/" + req.files[i].filename);
  //   }
  //   const imgPath = images[0];
  //   console.log(req.files);
  //   Property.findByIdAndUpdate(
  //     { _id: id },
  //     { imgPath: imgPath, images: images },
  //     (err, result) => {
  //       if (err || !req.files || err instanceof MulterError) {
  //         res.status(400).send(err);
  //       } else {
  //         res.status(204).send(result);
  //       }
  //     }
  //   );
  try {
    console.log(req.files);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
