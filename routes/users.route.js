const router = require('express').Router();
const Users = require('../models/users');
const search = require("regex-collection");



router.route('/').get((req, res) => {
  Users.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/register').post((req,res)=>{
   
        const newUser = new Users({
            ssn: req.body.ssn,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: req.body.password,
            address: req.body.address,
            gender: req.body.gender,
        });
        newUser.save()
        .then(()=> res.json("User added!"))
        .catch(err => res.status(400).send("Error" + err));
     
});



module.exports = router;