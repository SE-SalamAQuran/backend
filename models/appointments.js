const { time } = require("faker");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({ path: 'C:/Users/user/Desktop/backend/.env' });
const uri = process.env.URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false,useCreateIndex: true});


mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    console.log("The error is:  " + err);
});

const Schema = mongoose.Schema;

const appointmentsSchema = new Schema({
     
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'property'
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        
    },
    place:{
        type: String
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    createdOn: {
        type: Date
    }
});

const Appointments = mongoose.model("Appointments",appointmentsSchema);

const data = [
    {"user":{"_id":"5fa5288ca69f5d28b0dde424", "$ref":"users"},"property":{"_id":"5fa537409f56a541e4601d2f"},"date":"12/17/2020","time":"10:35 AM","place":"Al-Ersal Street"},

    {"user":{"_id":"5fa5288ca69f5d28b0dde427", "$ref":"users"},"property":{"_id":"5fa537409f56a541e4601d32"},"date":"12/11/2020","time":"4:21 PM","place":"Near Hebron Center"},

    {"user":{"_id":"5fa5288ca69f5d28b0dde425", "$ref":"users"},"property":{"_id":"5fa537409f56a541e4601d34"},"date":"01/03/2021","time":"11:51 AM","place":"Al-Quds Street"}
];

// data.forEach(app => {
//     const newApp = new Appointments(app);
//     newApp.save((err)=>{
//         if(err){
//             console.log("Error adding data", err);
//         }else{
//             console.log("Data added successfully");
//         }
//     });
// });

// Appointments.deleteMany({} ,(err)=>{
//     if(err){
//         console.log("Can't Find data");
//     }else{
//         console.log("Deleted data successfully!");
//     }
// });

module.exports = Appointments;