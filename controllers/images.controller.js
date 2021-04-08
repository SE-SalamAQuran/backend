const Images = require("../models/images.cloud.model");
const cloudinary = require("cloudinary").v2;

module.exports.UploadImages = async (req, res) => {
  const options = {
    allowed_formats: ["png", "jpeg", "jpg"],
    backup: true,
  };
  cloudinary.uploader.upload(req.file, options, callback);
  const imagesUploaded = new Images({
    image: req.file.path,
  });
  try {
    await imagesUploaded.save();
    res.status(201).send(imagesUploaded);
  } catch (error) {
    return res.status(400).json({
      message: "Error Uploading Images",
      Status: `${error}`,
    });
  }
};
