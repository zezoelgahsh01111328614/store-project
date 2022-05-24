
require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const connect=require("./db/connect")

const mongoose = require('mongoose');
const PORT=process.env.PORT || 5000

var customerRouter = require('./routes/customer');
var itemRouter = require('./routes/item');
var storeRouter = require('./routes/store');
var aggregationRouter = require('./routes/aggregation');


var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/customer', customerRouter);
app.use('/item', itemRouter);
app.use('/store', storeRouter);
app.use('/aggregation', aggregationRouter);


const start = async () => {
  try {
    // connectDB
    await connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}...`));
  

  } catch (error) {
    console.log(error);
  }
};

start();


module.exports = app;