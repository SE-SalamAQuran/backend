const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
dotenv.config();
const users = require('./Users.json');
const Lands = require('./Lands.json');
const port = process.env.PORT || 5000;

const Lands = require('./models/landSale');
const Users = require('./models/users');



app.set('view engine',ejs);




app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/users", (req,res)=>{
    Users.find({ })
    .then((users)=>{
        console.log('Data', users);
    })
    .catch((err)=>{
        console.log('Error', err)
    });
    res.json(users);
});

app.get("/lands",(req,res)=>{
    Lands.find({ })
    .then((lands)=>{
        console.log('Lands',lands);
    })
    .catch((err)=>{
        console.log('Error',err);
    });
    res.json(lands);
});
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
