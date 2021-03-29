var mongoose = require("mongoose");
const validator = require("validator");
const passportLocal = require("passport-local-mongoose");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv").config();

const secret = process.env.ENCRYPT_SECRET;

var Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 10,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("Phone number is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    profile: {
      type: String,
      default: "http://localhost:5000/default/avatar",
    },
  },
  { timestamps: true }
);

passport.initialize();
passport.session();

userSchema.plugin(passportLocal);
const Users = mongoose.model("Users", userSchema);

passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

module.exports = Users;
