
const mongoose = require('mongoose');

const dotenv = require('dotenv').config({ path: 'C:/Users/user/Desktop/backend/.env' });
const uri = process.env.URI;
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true});


mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    console.log("The error is:  " + err);
});

const Schema = mongoose.Schema;
 

const landsForSaleSchema = new Schema({
    pics: Array,
    price: String,
    tub_no: Number,
    land_no: Number,
    city: String,
    location: String,
    negotiable: Boolean,
    municipal_Services: Boolean,
    area: Number,
    Classifiaton: String,
    timestamp:{
        type: Date,
        default: Date.now()
    },
    added_by:{
        type: String,
        ref: 'Users'
    }
});

const Lands = mongoose.model("Lands", landsForSaleSchema);

// mock_data.forEach(land => {
//     const newLands = new Lands(land);
//     newLands.save((err)=>{
//         if(err){
//             console.log("Error adding documents");
//         }else{
//             console.log("Mock_data saved in DB!");
//         }
//     });    
// });


// Lands.deleteMany({} ,(err)=>{
//     if(err){
//         console.log("Can't Find data");
//     }else{
//         console.log("Deleted data successfully!");
//     }
// });

module.exports = Lands;