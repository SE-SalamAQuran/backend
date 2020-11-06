const  mongoose = require('mongoose');
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

const propertyTypesSchema = new Schema({
    title: {
        type: String
    },
    type: {
        type: String,
        required: true,
        enum: ['land', 'apartment-cash', 'apartment-installment', 'house' ,'villa','roof','apartment-rent']
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

const propertyTypes = mongoose.model("propertyTypes",propertyTypesSchema);


// data.forEach(type =>{
//     const newType = new propertyTypes(type);
//     newType.save((err)=>{
//         if(err){
//             console.log("Error adding data", err);
//         }else{
//             console.log("Data added successfully");
//         }
//     });
// });
module.exports = propertyTypes;