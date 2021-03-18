let express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  path = require("path");
const { MulterError } = require("multer");
var multer = require("multer");

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
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

router.patch("/:id", upload.single("avatar"), function (req, res, err) {
  const id = req.params.id;

  const url = req.protocol + "://" + req.get("host");
  const profileImg = url + "/uploads/" + req.file.originalname;
  User.findOneAndUpdate(
    { _id: id },
    { profile: profileImg },
    (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(204).send(result);
      }
    }
  );
});

module.exports = router;
