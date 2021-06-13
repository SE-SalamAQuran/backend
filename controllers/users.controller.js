const Users = require("../models/users.model");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const randomString = require("randomstring");
const twilio = require("twilio");
const dotenv = require("dotenv").config();
const secretKey = process.env.JWT_SECRET;
const multer = require("multer");
let path = require("path");
const upload = require("../middleware/upload.single");

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
                    phoneNo: data["phoneNo"],
                    address: data["address"],
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

  fetcheAllUserData: async (req, res) => {
    const id = req.params.id;
    Users.findOne({ _id: id }, (err, result) => {
      if (err || result.isAdmin === false) {
        res.status(403).send(err);
      } else {
        Users.find({ isAdmin: false }, (error, users) => {
          if (err) {
            res.status(400).send(error);
          } else {
            res.json(users);
          }
        });
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
          phoneNo: req.body.phoneNo,
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

  forgotPasswordMail: async (req, res) => {
    let verCode = randomString.generate({
      length: 8,
      charset: "alphanumeric",
      readable: true,
    });

    var mailConfig;
    if (process.env.NODE_ENV === "production") {
      // all emails are delivered to destination
      mailConfig = {
        host: "smtp.sendgrid.net",
        port: 587,
        auth: {
          user: process.env.SEND_GRID_USR,
          pass: process.env.SEND_GRID_PSWD,
        },
      };
    } else {
      // all emails are catched by ethereal.email
      mailConfig = {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_ADDR,
          pass: process.env.EMAIL_PASSWD,
        },
      };
    }
    let transporter = nodemailer.createTransport(mailConfig);
    const destEmail = req.body.emailPhone;
    // send mail with defined transport object
    await transporter.sendMail({
      from: `${process.env.BRAND} ${process.env.EMAIL_ADDR} `, // sender address
      to: `${destEmail}`, // list of receivers
      subject: "Password Recovery Service", // Subject line
      text: `Our valid user,  ${verCode} is the code to your password recovery. Do Not share this code with anyone`, // plain text body
      html: `<h1>Palestinian Estates</h1> <p><em> ${verCode}</em>  is the code to your password recovery, Do Not share this code with anyone</p>`, //html body
    });
    res.status(201).json({ code: verCode });
  },

  forgotPasswordSMS: async (req, res) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);
    const sender = process.env.TWILIO_PHONE_NUM;
    const destPhone = req.body.emailPhone;

    Users.findOne({ phoneNo: destPhone }, (err, found) => {
      if (err) {
        res.status(400).send(err);
      } else {
        let verCode = randomString.generate({
          length: 8,
          charset: "alphanumeric",
          readable: true,
        });

        client.messages
          .create({
            body: `${verCode} is the verification code for your account`,
            from: `${sender}`,
            to: `${destPhone}`,
          })

          .then((message) => res.status(201).json({ code: verCode }))
          .catch((err) => res.status(400).send(err));
      }
    });
  },

  changePassword: async (req, res) => {
    const { pass, passConf, username } = req.body;
    if (pass === passConf) {
      bcrypt.hash(pass, 10, async (err, hash) => {
        if (err) {
          res.status(400).json({ Error: err });
        } else {
          await Users.findOneAndUpdate(
            { username: username },
            { password: hash }
          )
            .then(() => res.json({ New: pass }))
            .catch((error) => res.status(400).send(error));
        }
      });
    } else {
      res.status(400).json({ error: "Passwords do not match" });
    }
  },
  getProfileImg: async (req, res) => {
    const id = req.params.id;
    Users.findOne({ _id: id }, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result.profile);
      }
    });
  },
};
