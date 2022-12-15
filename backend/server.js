const express = require('express');
const app = express()
const path = require('path');
// morgan is a logger
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config()

const DB = mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        console.log("DB CONNECTION SUCCESSFUL!");
    });


// ------------------- MIDDLEWARE 
app.use(morgan('dev'))
    // cors is Cross Origin Reference System
    // bodyparcer json 
app.use(express.json())

const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log(`listening on ${port} ....`)
})