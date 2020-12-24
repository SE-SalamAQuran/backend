const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: 'C:/Users/ELIFE/Desktop/backend/.env'});
const cors = require('cors');
const uri = process.env.URI;
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true ,useFindAndModify: false});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Connected to DB!");
});


const app = express();



app.use(cors());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const usersRoute = require('./routes/users.routes');


app.use('/users',usersRoute);


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});

