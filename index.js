const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({
  path: "C:/Users/ELIFE/Desktop/backend/.env",
});
const cors = require("cors");
const uri = process.env.URI;
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const app = express();

app.use(passport.initialize());
app.use(passport.session());

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan("dev"));

const usersRoute = require("./routes/users.routes");
const { initialize } = require("passport");

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Success");
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
