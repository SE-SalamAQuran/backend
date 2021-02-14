const Users = require("../models/users.model");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv").config();

const secretKey = process.env.JWT_SECRET;

module.exports = {
  registerNewUser: async (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        res.status(400).send(err);
      } else {
        const newUser = new Users({
          fname: req.body.fname,
          lname: req.body.lname,
          phoneNo: req.body.phoneNo,
          username: req.body.username,
          password: hash,
          address: req.body.address,
        });

        await newUser
          .save()
          .then(() => res.json(newUser))
          .catch((error) => res.status(400).send(error));
      }
    });
  },

  userLogin: (req, res) => {
    var loginType;
    if (req.body.emailPhone != "" && req.body.password != "") {
      if (isNaN(req.body.emailPhone)) loginType = "username";
      else loginType = "phoneNo";
      Users.findOne()
        .where(loginType, req.body.emailPhone)
        .exec((err, data) => {
          if (err) res.status(400).send(err);
          //check if user exists
          else if (data) {
            bcrypt.compare(
              //check if password correct
              req.body.password,
              data.password,
              function (error, passMatch) {
                if (error) res.status(400).send(error);
                else if (passMatch) {
                  let jwtData = {
                    _id: data["_id"],
                    fname: data["fname"],
                    lname: data["lname"],
                    username: data["username"],
                    isAdmin: data["isAdmin"],
                  };
                  var token = jwt.sign({ user: jwtData }, secretKey);
                  let decoded = jwt.verify(token, secretKey);
                  res.status(200).json({
                    token: token,
                    decoded: decoded.user,
                  });
                } else {
                  res.status(401).json({ message: "Invalid Credentials1" });
                }
              }
            );
          } else res.status(401).json({ message: "Invalid Credentials2" });
        });
    } else res.status(400).json({ message: "Provide all Credentials" });
  },

  fetcheUserData: (req, res) => {
    const id = req.params.id;
    Users.findOne({ _id: id }, (err, result) => {
      if (err) {
        res.status(400).send(err);
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
      (err) => {
        if (err) res.json(err);
        else {
          console.log("updating done ");
        }
      }
    );
  },

  logout: (req, res) => {
    req.logout();
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
