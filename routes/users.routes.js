const router = require('express').Router();
const Users = require('../models/users.model');
const search = require("regex-collection");



router.route('/').get((req, res) => {
  Users.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/register').post((req,res)=>{
   
        const newUser = new Users({
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




router.route('/login').post((req,res)=>{
 const email = req.body.username;
 const password = req.body.password;
Users.findOne({email: email},(err,user)=>{
   if(err) {
     console.log(err);
   }else{
     if(user){
       if(user.password === password){
         res.json(user);
         console.log(user);
       }else{
         res.send("Wrong password");
       }
     }
   }
  });
});





module.exports = router;