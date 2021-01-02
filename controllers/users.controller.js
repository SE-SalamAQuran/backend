const Users = require("../models/users.model");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const dotenv = require("dotenv").config({
  path: "C:/Users/user/Desktop/Pal Estate/backend.env",
});

passport.initialize();
passport.session();
passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/users/auth/google/PalestinianEstate",
      userProfileURL: "http://www.googleapis.com/auth/plus.login",
    },
    function (accessToken, refreshToken, profile, cb) {
      Users.findOrCreate({ googleId: _id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["email", "name"],
    },
    function (accessToken, refreshToken, profile, done) {
      const { email, first_name, last_name } = profile._json;
      const userData = {
        email,
        firstName: first_name,
        lastName: last_name,
      };
      new userModel(userData).save();
      done(null, profile);
    }
  )
);

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

  logout: (req, res) => {
    req.logout();
    req.session.destroy();
    res.json("");
  },
};
