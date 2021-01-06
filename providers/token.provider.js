const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({
  path: "C:Users/user/Desktop/Pal Estate/backend/.env",
});

var secretKey = process.env.JWT_SECRET;

jwt.sign(
  { foo: "bar" },
  secretKey,
  { algorithm: "RS256" },
  function (err, token) {
    console.log(token);
  }
);
