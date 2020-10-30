const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const uri = 'mongodb://salam_quran:0TpCqcF1CSnhUwhu@cluster0-shard-00-00.lguwq.mongodb.net:27017,cluster0-shard-00-02.lguwq.mongodb.net:27017,cluster0-shard-00-01.lguwq.mongodb.net:27017/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const port = process.env.PORT || 5000;
const mock_data = require('./MOCK_DATA.json');
app.set('view engine','ejs');




app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true});
mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    console.log("The error is:  " + err);
});

const userSchema = mongoose.Schema({
    ssn: Number,
    fName: String,
    lName: String,
    email: String,
    gender: String,
    address: String,
    phone: String,
    appointment: Array,
    transactions: Array 

});

const UserModel = mongoose.model("UserModel",userSchema);


// mock_data.forEach(user => {
//     const newUsers = new UserModel(user);
//     newUsers.save((err)=>{
//         if(err){
//             console.log("Error adding documents");
//         }else{
//             console.log("Mock_data saved in DB!");
//         }
//     });    
// });

//========================================================//

// UserModel.deleteMany({} ,(err)=>{
//     if(err){
//         console.log("Can't Find data");
//     }else{
//         console.log("Deleted data successfully!");
//     }
// });

app.get("/", (req,res)=>{
    UserModel.find({ })
    .then((mock_data)=>{
        console.log('Data', mock_data);
    })
    .catch((err)=>{
        console.log('Error', err)
    });
    res.json(mock_data);
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
