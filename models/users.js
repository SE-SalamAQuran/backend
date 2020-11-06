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

const data = [
    {"ssn":901282313,"fname":"Sallyanne","lname":"Gwinnett","email":"sgwinnett0@amazon.co.jp","phoneNo":"+86 (163) 494-5069","password":"Crx9xiua","address":"76539 Manitowish Pass","gender":"Female","isAdmin":false,"is_active":true},
    {"ssn":190238667,"fname":"Nessa","lname":"Nickell","email":"nnickell1@1688.com","phoneNo":"+63 (384) 597-3049","password":"mo5Lgucxw","address":"8 Meadow Vale Hill","gender":"Female","isAdmin":false,"is_active":false},
    {"ssn":309127126,"fname":"Glynis","lname":"Ormshaw","email":"gormshaw2@latimes.com","phoneNo":"+63 (708) 359-9531","password":"fQ3Wx2Ixhwd","address":"60115 Dixon Circle","gender":"Female","isAdmin":false,"is_active":true},
    {"ssn":487651930,"fname":"Tades","lname":"Vivians","email":"tvivians3@people.com.cn","phoneNo":"+31 (975) 388-2715","password":"nn7WxUNUyLn","address":"71816 Debs Road","gender":"Male","isAdmin":false,"is_active":true},
    {"ssn":521371948,"fname":"Nona","lname":"Gravener","email":"ngravener4@boston.com","phoneNo":"+48 (657) 161-2550","password":"DZta7Si","address":"32291 Troy Point","gender":"Female","isAdmin":false,"is_active":false}
];

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