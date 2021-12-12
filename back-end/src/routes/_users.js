"use strict"

// dependencies
const express = require('./index');

//controllers
const clientPersisteController = require('../controllers/users/persist.controller');

express.router.post('/users', clientPersisteController.createUser);

module.exports = express.router;