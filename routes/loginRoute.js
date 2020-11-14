const Router = require("express").Router();
let User = require('../models/users');



Router.route('/login').post((req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({email: username}, (user,err)=>{
        if(err){
            console.log("User not found");
        }else{
            if(user.password === password){
                console.log("User found and logged in");
            }else{
                console.log("Password incorrect");
            }
        }
    });
});

module.exports = Router;