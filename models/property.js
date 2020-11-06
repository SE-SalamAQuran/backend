var mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'C:/Users/user/Desktop/backend/.env' });
const uri = process.env.URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex: true});



mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    console.log("The error is:  " + err);
});

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

const data = [
    {"title":"Land for sale","propetyFor":"sale","description":"Land in Surda for Sale","type":{"_id":"5fa4181b4d01cb2c40fca42b","$ref":"propertyTypes"},"city":"Ramallah","address":"Surda-Downtown","price":220000,"currency":"USD","userId":{"_id":"5fa5288ca69f5d28b0dde425","$ref":"users"},"status":"available","classification":"A","area":14887,"images":[],"imgPath":"http://dummyimage.com/165x141.jpg/dddddd/000000"},
    {"title":"Villa for sale","propetyFor":"sale","description":"Villa for sale in Jericho","type":{"_id":"5fa4181b4d01cb2c40fca42c","$ref":"propertyTypes"},"city":"Jericho","address":"Parks street","price":100000,"currency":"JOD","userId":{"_id":"5fa5288ca69f5d28b0dde424","$ref":"users"},"status":"available","classification":"B","area":27837,"images":[],"imgPath":"http://dummyimage.com/206x133.jpg/cc0000/ffffff"},
    {"title":"Apartment for rent","propetyFor":"rent","description":"Apartment 3 bedrooms 5th floor for rent","type":{"_id":"5fa52a8b2454824b10cc920e","$ref":"propertyTypes"},"city":"Ramallah","address":"Al-Terah","price":500,"currency":"USD","userId":{"_id":"5fa5288ca69f5d28b0dde424","$ref":"users"},"status":"available","classification":"B","area":167,"images":[],"imgPath":"http://dummyimage.com/206x133.jpg/cc0000/ffffff"},
    {"title":"Apartment for sale ,cash payment","propetyFor":"sale","description":"Apartment for sale, 3rd floor, super deluxe finishing","type":{"_id":"5fa4181b4d01cb2c40fca42d","$ref":"propertyTypes"},"city":"Hebron","address":"Ras Al-jorah street","price":120000,"currency":"USD","userId":{"_id":"5fa5288ca69f5d28b0dde428","$ref":"users"},"status":"available","classification":"C","area":209,"images":[],"imgPath":"http://dummyimage.com/206x133.jpg/cc0000/ffffff"},
    {"title":"Roof for sale in Nablus","propetyFor":"sale","description":"super-extra deluxe meters roof for sale in Nablus","type":{"_id":"5fa52a8b2454824b10cc920f","$ref":"propertyTypes"},"city":"Nablus","address":"Old town","price":280000,"currency":"USD","userId":{"_id":"5fa5288ca69f5d28b0dde427","$ref":"users"},"status":"available","classification":"A","area":380,"images":[],"imgPath":"http://dummyimage.com/206x133.jpg/cc0000/ffffff"},
    {"title":"House for sale","propetyFor":"sale","description":"Big family house","type":{"_id":"5fa52a8b2454824b10cc920d","$ref":"propertyTypes"},"city":"Jerusalem","address":"Kafr Aqab","price":300000,"currency":"USD","userId":{"_id":"5fa5288ca69f5d28b0dde425","$ref":"users"},"status":"available","classification":"B","area":320,"images":[],"imgPath":"http://dummyimage.com/206x133.jpg/cc0000/ffffff"},
    {"title":"Apartment for sale, installment","propetyFor":"sale","description":"Down-payment half of the total, and 1000$ each month","type":{"_id":"5fa52a8b2454824b10cc920c","$ref":"propertyTypes"},"city":"Tulkarm","address":"Down-town","price":90000,"currency":"USD","userId":{"_id":"5fa5288ca69f5d28b0dde426","$ref":"users"},"status":"available","classification":"A","area":140,"images":[],"imgPath":"http://dummyimage.com/206x133.jpg/cc0000/ffffff"},
];

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
// module.exports =  Properties;

// Properties.deleteMany({} ,(err)=>{
//     if(err){
//         console.log("Can't Find data");
//     }else{
//         console.log("Deleted data successfully!");
//     }
// });