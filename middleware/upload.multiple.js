var multer = require("multer");
var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_HOST,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "properties",
    format: async () => {
      "png" || "jpeg" || "jpg";
    },
    public_id: (req, file) => file.filename,
  },
});

const parser = multer({ storage: storage });
module.exports = parser;
