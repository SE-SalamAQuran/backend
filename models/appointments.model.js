const { time } = require("faker");
const mongoose = require("mongoose");


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

},{timestamps: true}
);

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