const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: 'C:/Users/user/Desktop/Pal Estate/backend/.env'});
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const uri = process.env.URI;
const port = process.env.PORT || 5000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true ,useFindAndModify: false});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Connected to DB!");
});


const app = express();



app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

const usersRoute = require('./routes/users.routes');

app.use('/users',usersRoute);



app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});

