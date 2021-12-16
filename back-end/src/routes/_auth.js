"use strict"

// dependencies
const express = require('./index');

//controllers
const authenticationRetriveController = require('../controllers/authentication/retrive.controller');

express.router.post('/authenticate', authenticationRetriveController.login);

module.exports = express.router;