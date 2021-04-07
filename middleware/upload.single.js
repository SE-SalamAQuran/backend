let express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  path = require("path");
const { ResumeToken } = require("mongodb");
const { MulterError } = require("multer");
var multer = require("multer");
const User = require("../models/users.model");
const Property = require("../models/property.model");

const DIR = "../uploads";

const storage = new multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});

var upload = new multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.patch("/:id", upload.single("avatar"), function (req, res) {
  const id = req.params.id;
  const url = req.protocol + "://" + req.get("host") + "/";

  const profileImg = url + "uploads/" + req.file.filename;
  var err;
  if (err instanceof MulterError || !req.file) {
    res.statusCode(400).send(err);
  }
  User.findOneAndUpdate(
    { _id: id },
    { profile: profileImg },
    (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(204).json(result);
      }
    }
  );
});

router.patch("/prop/:id", upload.array("images", 6), (req, res) => {
  const id = req.params.id;
  const url = req.protocol + "://" + req.get("host") + "/";

  var err;
  if (err instanceof MulterError || !req.files) {
    res.statusCode(400).send(err);
  }

  Property.find({ _id: id }, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      result.images.push(url + "uploads/" + req.file.filename);
    }
  });

  Property.findOneAndUpdate(
    { _id: id },
    { imgPath: url + "uploads/" + req.files[0].filename },
    (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(204).json(result);
      }
    }
  );
});

module.exports = router;
