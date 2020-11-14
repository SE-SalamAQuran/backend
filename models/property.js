var mongoose = require('mongoose');
// const dotenv = require('dotenv').config({ path: 'C:/Users/user/Desktop/backend/.env' });
// const uri = process.env.URI;

// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex: true});



// mongoose.connection.on('connected',()=>{
//     console.log("Connected to DB");
// });
// mongoose.connection.on('error', (err)=>{
//     console.log("The error is:  " + err);
// });

var Schema = mongoose.Schema;

const propertySchema = new Schema({  
    title: {
        type: String,
        trim: true,
        required: true
    },
    propertyFor: {
        type: String,
        required: true,
        default: 'sell',
        enum: ['sell', 'rent']
    },
    description: {
        type: String,
        trim: true
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'propertyTypes'
    },
    
    city: {
        type: String
    },
    
    address: {
        type: String,
        required: true
    },
     
    price: {
        type: Number
    },
    currency: {
        type: String,
        enum: ['USD','JOD','ILS'],
        default: 'USD'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    status: {
        type: String,
        default: 'available', 
        enum: [ 'available', 'sold', 'rented', 'expired' ]
    },
    classification: {
        type: String,
        enum: ['A','B','C']
    },
    area: {
        type: Number,
        trim: true,
        required: true
    },
    images: {
        type: [String]
    },
    imgPath: {
        type: String
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

const Properties = mongoose.model("Properties",propertySchema);

// data.forEach(p => {
//     const newP = new Properties(p);
//     newP.save((err)=>{
//         if(err){
//             console.log("Error adding data" +err);
//         }else{
//             console.log("Data added successfully");
//         }
//     }); 
// });

// Properties.deleteMany({} ,(err)=>{
//     if(err){
//         console.log("Can't Find data");
//     }else{
//         console.log("Deleted data successfully!");
//     }
// });

module.exports =  Properties;
