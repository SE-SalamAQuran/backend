let express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  path = require("path");
const { ResumeToken } = require("mongodb");
const { MulterError } = require("multer");
var multer = require("multer");

const DIR = "../uploads";

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
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const User = require("../models/users.model");

router.patch("/:id", upload.single("avatar"), function (req, res) {
  const id = req.params.id;
  const url = req.protocol + "://" + req.get("host") + "/";

  const profileImg = url + "uploads/" + req.file.filename;
  var err;
  if (err instanceof MulterError) {
    res.status(400).send(err);
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

module.exports = router;
