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
const ApartmentsRent = require('./models/apartmentsRent');
const ApartmentsCash = require('./models/apartmentsCashSale');
const ApartmentsInstallment = require('./models/apartmentsInstallments');


app.set('view engine',ejs);




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

app.get("/lands",(req,res)=>{
    Lands.find({ })
    .then((lands)=>{
        console.log('Lands',lands);
        res.json(lands);
    })
    .catch((err)=>{
        console.log('Error',err);
    });  
});

app.get("/apartments/rent", (req,res)=>{
    ApartmentsRent.find({ })
    .then((apartments)=>{
        console.log('Data',apartments);
        res.json(apartments);
    })
    .catch((err)=>{
        console.log('Error', err);
    });
});

app.get("/apartments/cash", (req,res)=>{
    ApartmentsCash.find({ })
    .then((apartments)=>{
        console.log('Data',apartments);
        res.json(apartments);
    })
    .catch((err)=>{
        console.log('Error',err);
    });
});

app.get("/apartments/installment", (req,res)=>{
    ApartmentsInstallment.find({ })
    .then((apartments)=>{
        console.log('Data',apartments);
        res.json(apartments);
    })
    .catch((err)=>{
        console.log('Error',err);
    });
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
