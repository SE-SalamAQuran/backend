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
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const upload = require("./providers/gridFS.provider");
const fileUpload = require("express-fileupload");
const usersRoute = require("./routes/users.routes");
const propertiesRoute = require("./routes/properity.routes");
const { initialize } = require("passport");

const app = express();

app.use(morgan("dev"));
app.use(fileUpload({}));
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

app.use(bodyParser.json());
app.use(upload.single());
app.use(bodyParser.urlencoded({ extended: true }));
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

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
