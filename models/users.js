var mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'C:/Users/user/Desktop/backend/.env' });
const uri = process.env.URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true});


mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    console.log("The error is:  " + err);
});


var Schema = mongoose.Schema;

const userSchema = new Schema({
    ssn: {
        type: Number
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phoneNo: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        
    },
    address: {
        type: String,
        trim: true,
        required:true
    },
    gender: {
        type:String,
        enum: ['Male','Female'],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    is_active: {
        type: Boolean,
        default: true
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

const Users = mongoose.model("Users",userSchema);


// data.forEach(user => {
//     const newUser = new Users(user);
//     newUser.save((err)=>{
//         if(err){
//             console.log("Error adding data!"+ err);
//         }else{
//             console.log("Added users successfully");
//         }
//     });
// });

module.exports = Users;