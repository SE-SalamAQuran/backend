const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'C:/Users/user/Desktop/backend/.env' });
const mock_data = require('../Users.json');
const uri = process.env.URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true});


mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    console.log("The error is:  " + err);
});


const userSchema = mongoose.Schema({
    ssn: Number,
    fName: String,
    lName: String,
    email: String,
    gender: String,
    address: String,
    phone: String,
    appointments: Array,
    transactions: Array 
   
});

const Users = mongoose.model("UserModel",userSchema);

// Users.deleteMany({});


// Users.deleteMany({} ,(err)=>{
//     if(err){
//         console.log("Can't Find data");
//     }else{
//         console.log("Deleted data successfully!");
//     }
// });

mock_data.forEach(user => {
    const newUsers = new Users(user);
    newUsers.save((err)=>{
        if(err){
            console.log("Error adding documents");
        }else{
            console.log("Mock_data saved in DB!");
        }
    });    
});


module.exports = Users;