const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const uri = 'mongodb://salam_quran:0TpCqcF1CSnhUwhu@cluster0-shard-00-00.lguwq.mongodb.net:27017,cluster0-shard-00-02.lguwq.mongodb.net:27017,cluster0-shard-00-01.lguwq.mongodb.net:27017/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const port = process.env.PORT || 5000;
app.set('view engine','ejs');


const userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    ssn: Number,
    email: String,
    gender: String,
    phone: String,
    appointment: Array,
    transactions: Array 

});

const UserModel = mongoose.model("UserModel",userSchema);
const data = {
id:404449605,
first_name:"Salam",
last_name:"Quran",
email:"salamQuran@gmail.com",
gender:"Male",
address:"Ramallah",
phone:"+970 (597) 156-276",
appointments: [],
transactions:[]

};

const newUser = new UserModel(data);
newUser.save((err)=>{
    if(err){
        console.log("Error in saving document");
    }else{
        console.log("Data saved successfully");
    }
})
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

app.get("/", (req,res)=>{
    UserModel.find({ })
    .then((data)=>{
        console.log('Data', data);
    })
    .catch((err)=>{
        console.log('Error', err)
    });
    res.json(data);
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
