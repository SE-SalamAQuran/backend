const { time } = require("faker");
const mongoose = require("mongoose");
// const dotenv = require('dotenv').config({ path: 'C:/Users/user/Desktop/backend/.env' });
// const uri = process.env.URI;
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false,useCreateIndex: true});


// mongoose.connection.on('connected',()=>{
//     console.log("Connected to DB");
// });
// mongoose.connection.on('error', (err)=>{
//     console.log("The error is:  " + err);
// });

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