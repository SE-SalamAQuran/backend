const Router = require("express").Router();
const search = require("regex-collection");
const Users = require("../models/users");

Router.route('/').post((req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const ssn = req.body.ssn;
    const phoneNo = req.body.phone;
    const address = req.body.address;
    const gender = req.body.gender;
    const fname = req.body.fname;
    const lname = req.body.lname;
    var ssn_valid = checkSsn(ssn);
    var email_valid = checkEmail(email);
    var phone_valid = checkPhone(phoneNo);
    if(ssn_valid && email_valid && phone_valid){
        const newUser = new Users({
            ssn,
            fname,
            lname,
            email,
            phoneNo,
            password,
            address,
            gender
        });
        newUser.save()
        .then(()=>{res.json("User added successfully!")})
        .catch(err =>{res.status(400).json("Invalid parameters!!")});
    }
});


//Checking parameters validation
//-------------------------------

function checkSsn(ssn){ //SSN must be a 9-digit number.
   return (/^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/.test(ssn));
}

function checkEmail(email){  //email must be formatted correctly
    return search.isEmailAddress(email);
}

function checkPhone(phoneNo){ //Phone number must be formatted correctly
    return search.isTelephoneNumber(phoneNo);
}

module.exports = Router;
