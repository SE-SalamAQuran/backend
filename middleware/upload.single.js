let express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  path = require("path");
const { ResumeToken } = require("mongodb");
const { MulterError } = require("multer");
var multer = require("multer");
const User = require("../models/users.model");
const Images = require("../models/images.cloud.model");
const Properties = require("../models/property.model");
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

router.patch("/:id", upload.single("omg"), function (req, res) {
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

router.post("/prop/:id", upload.single("omg"), function (req, res) {
  const id = req.params.id;
  const url = req.protocol + "://" + req.get("host") + "/";

  const profileImg = url + "uploads/" + req.file.filename;
  var err;
  if (err instanceof MulterError || !req.file) {
    res.statusCode(400).send(err);
  }
  if (!req.file) {
    res.status(400).json({
      Error: "File may be empty or corrupted",
      Status: "Failure",
    });
  }
  const pic = new Images({
    image: profileImg,
    property: id,
  });

  try {
    pic.save();
    res.status(201).send(pic);
  } catch (error) {
    return res.status(400).json({
      Status: "Failed to upload image",
      Error: `${error}`,
    });
  }
});

module.exports = router;
