'use strict';

var express = require('express');
var userController = require('../controllers/user');
var ucenikController = require('../controllers/ucenik');
var router = express.Router();

router.route('/register')
    .post(userController.register);

router.route('/login')
    .post(userController.sign_in);

router.route('/ucenik')
    .get(ucenikController.getUcenik)
    .post(userController.loginRequired, ucenikController.postUcenik);

module.exports = router;

