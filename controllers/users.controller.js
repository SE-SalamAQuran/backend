const Users = require("../models/users.model");
const passport = require("passport");
const session = require("express-session");

passport.initialize();
passport.session();
passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

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
          passport.authenticate("local")(inReq, inRes, () => {
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
    res.json("");
  },
};
