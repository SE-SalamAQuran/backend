const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: 'C:/Users/user/Desktop/backend/.env'});
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const uri = process.env.URI;
const port = process.env.PORT || 5000;


app.set('view engine',ejs);

const Users = require('./models/users');
const Properties = require('./models/property');
const propertyTypes = require('./models/propertyTypes');
const Appointments = require('./models/appointments');

app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/users", (req,res)=>{
    Users.find({  })
    .then((users)=>{
        console.log('Data', users);
        res.json(users);
    })
    .catch((err)=>{
        console.log('Error', err);
    });
    
});


app.get("/properties",(req,res)=>{
    Properties.find({  })
    .then((properties)=>{
        console.log('Data',properties);
        res.json(properties);
    })
    .catch((err)=>{
        console.log('Error', err);
    });
});

app.get("/appointments", (req,res)=>{
    Appointments.find({  })
    .then((appointments)=>{
        console.log('Data', appointments);
        res.json(appointments);
    })
    .catch((err)=>{
        console.log('Error',err);
    });
});

app.get("/property_types", (req,res)=>{
    propertyTypes.find({  })
    .then((propertyTypes)=>{
        console.log('Data', propertyTypes);
        res.json(propertyTypes);
    }).catch((err)=>{
        console.log('Error',err);
    });
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
