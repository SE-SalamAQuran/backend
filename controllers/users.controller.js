const Users = require("../models/users.model");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const dotenv = require("dotenv").config({
  path: "C:/Users/ELIFE/Desktop/backend/.env",
});

module.exports = {
  addNewUser: (req, res) => {
    Users.register(
      {
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        phoneNo: req.body.phoneNo,
        password: req.body.password,
        address: req.body.address,
        gender: req.body.gender,
      },
      req.body.password,
      (err, user) => {
        if (err) {
          res.status(400).send(err);
          console.log(err);
        } else {
          passport.authenticate("local")(req, res, () => {
            res.status(200).send(user);
          });
        }
      }
    );
  },
  userLogin: async (req, res) => {
    const user = new Users({
      username: req.body.email,
      password: req.body.password,
    });
    req.login(user, function (err) {
      if (err) {
        res.status(400).send(err);
      }
      passport.initialize();
      passport.session();
      passport.authenticate(
        { username: user.username },
        user.password,
        (error, result) => {
          if (error) {
            res.status(400).send(error);
          } else {
            res.status(200).send(result);
          }
        }
      );
      res.status(200).send(user);
    });
  }, //Add your new code here

  fetcheUserData: (req, res) => {
    const id = req.params.id;
    Users.findOne({ _id: id }, (err, result) => {
      if (err) {
        res.sendStatus(400).send("Error", err);
      } else {
        res.json(result);
      }
    });
  },
  updateUserData: (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    console.log(id);
    Users.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          fname: req.body.fname,
          lname: req.body.lname,
          address: req.body.address,
          phoneNo: req.body.phoneNumber,
        },
      },
      (err, docs) => {
        if (err) res.json(err);
        else {
          console.log("updating done ");
        }
      }
    );
  },

  logout: (req, res) => {
    
    const id = req.params.id;
    console.log(id);
    Users.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          is_active: false,
        },
      },
      (err) => {
        if (err) res.json(err);
        else {
          console.log("you are logged out ");
        }
      }
    );
  },
};
