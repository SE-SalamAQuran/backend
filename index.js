const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const uri = process.env.URI;
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const upload = require("./middleware/upload.single");
const path = require("path");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const app = express();

app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 1000000 })
);
app.use(express.json({ extended: true, limit: "50mb" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to DB!");
});

app.use(cors());

app.use(multer({ dest: "./uploads" }).single("avatar"));
app.use(multer({ dest: "./public/properties" }).array("media"));

// use morgan to log requests to the console
app.use(morgan("dev"));

const usersRoute = require("./routes/users.routes");
const propertiesRoute = require("./routes/properity.routes");
const uploadRoutes = require("./middleware/upload.single");
const uploadProp = require("./middleware/upload.multiple");
const { initialize } = require("passport");
const { dirname } = require("path");

app.use("/users", usersRoute);
app.use("/upload/avatar", uploadRoutes);
app.use("/uploads", uploadProp);
app.use(express.static(path.join(__dirname, "./uploads")));
app.use(express.static(path.join(__dirname, "./public/properties")));

app.use("/properties", propertiesRoute);

app.get("/uploads/:bin", (req, res) => {
  const bin = req.params.bin;
  res.set("Content-type", "image/jpeg" || "image/png" || "image/jpg");
  var file = "./uploads/" + bin;
  var image = res.sendFile(file, { root: __dirname });
  return image;
});

app.get("/default/avatar", (req, res) => {
  res.sendFile("./profile.png", { root: __dirname });
});

app.get("/default/path", (req, res) => {
  res.sendFile("./making-offer-house.jpg", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
