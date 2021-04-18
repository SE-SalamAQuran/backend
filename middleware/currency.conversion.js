const router = require("express").Router();
const Properties = require("../models/property.model");
const dotenv = require("dotenv").config({});
const API_KEY = process.env.FREE_CURR_API_KEY;
const axios = require("axios");

router.post("/rate/:base/:desired", (req, res) => {
  const options = {
    method: "GET",
    url: "https://free.currconv.com/api/v7/convert",
    params: {
      q: req.params.base + "_" + req.params.desired,
      compact: "ultra",
      apiKey: API_KEY,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      const convert = Object.values(response.data);
      let i;
      for (i = 0; i < 1; i++) {
        var result = convert[i];
      }
      res.status(200).json({ rate: result });
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
