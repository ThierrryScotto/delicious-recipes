"use strict"

// dependencies
const express = require('./index');

//controllers
const categoriesRetriveController = require('../controllers/categories/retrive.controller.');

express.router.get('/categories', categoriesRetriveController.getcategories);
express.router.get('/categories/:category', categoriesRetriveController.getcategoryById);

module.exports = express.router;