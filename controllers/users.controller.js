const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  addNewUser: (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      const newUser = new Users({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        password: hash,
        address: req.body.address,
        gender: req.body.gender,
      });
      newUser
        .save()
        .then(() => res.json("User added!"))
        .catch((error) => res.status(400).send("Error" + error));
    });
  },
  userLogin: (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    Users.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        if (user.password === password) {
          res.json(user);
          console.log(user.fname + " " + user.lname + " " + "Is logged in.");
        } else {
          res.send("Wrong password");
        }
      }
    });
  }, //Add your new code here
};
