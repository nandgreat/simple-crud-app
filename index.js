const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')

const productRoute = require('./routes/product.route.js')
const app = express()

// middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello, World everyone!");
})




mongoose.connect('mongodb+srv://paul4nank:6MTQEjPm22WCxjPk@backenddb.891ox.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to the DB!')
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        })

    }).catch((e) => {
        console.log(e);
        console.log("Failed to coonnect to the DB");

    });
