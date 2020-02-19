'use strict';

var createError = require('http-errors');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser  = require('body-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
//var autoIncrement = require('mongoose-auto-increment');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ucenikRouter = require('./routes/ucenik');
var apiRouter = require('./routes/api');
var app = express();

mongoose.connect('mongodb://localhost/swe');
//autoIncrement.initialize(connection);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// jwt middleware
app.use(function(req, res, next) {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], 'WoW', function (err, decode) {
            if(err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
    // var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // if (token) {
    //     jwt.verify(token, app.get('superSecret'), function (err, decoded) {
    //         if (err) {
    //             return res.json({success: false, message: 'Failed to authenticate token.'});
    //         } else {
    //             req.decoded = decoded;
    //             next();
    //         }
    //     });
    // } else {
    //     return res.status(403).send({
    //         success: false,
    //         message: 'No token provided.'
    //     });
    // }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ucenik',ucenikRouter);
app.use('/api', apiRouter);

    // if (!token)
    //     return res.status(403).send({ auth: false, message: 'No token provided.' });
    // jwt.verify(token,'WoW', function(err, decoded) {
    //     if (err)
    //         return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    //     req.userId = decoded.id;
    //     next();
    // });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/*app.use('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.method === "OPTIONS") {
      res.header("Acces-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      return res.status(200).json({});
    }
    next();
  });*/
module.exports = app;