const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

var secretKey = process.env.JWT_SECRET;

jwt.sign(
  { foo: "bar" },
  secretKey,
  { algorithm: "RS256" },
  function (err, token) {
    console.log(token);
  }
);
