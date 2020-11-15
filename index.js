const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: 'C:/Users/user/Desktop/backend/.env'});
const cors = require('cors');
const uri = process.env.URI;
const port = process.env.PORT || 5000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true ,useFindAndModify: false});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Connected to DB!");
});
// const Users = require('./models/users');
// const Properties = require('./models/property');
// const propertyTypes = require('./models/propertyTypes');
// const Appointments = require('./models/appointments');

const app = express();

app.use(cors());
app.use(express.json());




const usersRoute = require('./routes/users.route');

app.use('/users',usersRoute);


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});

