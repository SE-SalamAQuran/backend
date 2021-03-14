const upload = require("../middleware/upload");
const multer = require("multer");

const uploadFile = async (req, res) => {
  await upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(400).json(err);
    }
    console.log(req.file);
    return res.status(200).send(req.file);
  });
};

module.exports = {
  uploadFile: uploadFile,
};
