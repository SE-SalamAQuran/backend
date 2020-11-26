var mongoose = require("mongoose");
const search = require("regex-collection")


var Schema = mongoose.Schema;

const userSchema = new Schema({
   
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
        required: true,
        validate: search.isEmailAddress
    },
    phoneNo: {
        type: String,
        required: true,
        validate: search.isTelephoneNumber
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
    profile:{
        type: String,
        default: "C:/Users/user/Desktop/Pal Estate/backend/profile.png"
    },
},{timestamps: true}
);

const Users = mongoose.model("Users",userSchema);


module.exports = Users;