const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
dotenv.config();

const port = process.env.PORT || 5000;

const Lands = require('./models/landSale');
const Users = require('./models/users');



app.set('view engine',ejs);




app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", (req,res)=>{
    Users.find({ })
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
