var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

const mongoose = require('mongoose');

var customerRouter = require('./routes/customer');
var itemRouter = require('./routes/item');
var storeRouter = require('./routes/store');
var aggregationRouter = require('./routes/aggregation');


var app = express();


app.use(logger('dev'));

//connect to DB
mongoose.connect('mongodb+srv://ahmedashraf:10203040@cluster0.v1yxka8.mongodb.net/sort?retryWrites=true&w=majority', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connected .....')
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/customer', customerRouter);
app.use('/item', itemRouter);
app.use('/store', storeRouter);
app.use('/aggregation', aggregationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;