const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const ejs = require("ejs");
const uri = process.env.URI;
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const upload = require("./providers/gridFS.provider");
const usersRoute = require("./routes/users.routes");
const propertiesRoute = require("./routes/properity.routes");
const { initialize } = require("passport");

const app = express();
// app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
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
app.use(methodOverride("_method"));
app.use("/users", usersRoute);
app.use("/properties", propertiesRoute);
// use morgan to log requests to the console

app.post("/upload/avatar", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/avatar_uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    app.use("/properity", propertiesRoute);

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
