const router = require('express').Router();
let Users = require('../models/users');



router.route('/users').get((req, res) => {
  Users.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});











router.route('/register').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});
//Needs updates///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;