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
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const app = express();

app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 1000000 })
);
app.use(express.json({ extended: true, limit: "50mb" }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/public", express.static("public"));

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
// use morgan to log requests to the console
app.use(morgan("dev"));

const usersRoute = require("./routes/users.routes");
const propertiesRoute = require("./routes/properity.routes");
const uploadRoutes = require("./middleware/upload.single");
const { initialize } = require("passport");

app.use("/users", usersRoute);
app.use("/upload/avatar", uploadRoutes);

app.use("/properties", propertiesRoute);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
