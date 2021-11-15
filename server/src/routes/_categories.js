"use strict"

// dependencies
const express = require('./index');

//controllers
const categoriesRetriveController = require('../controllers/categories/retrive.controller.');

express.router.get('/categories', categoriesRetriveController.getCategories);
express.router.get('/categories/:category', categoriesRetriveController.getCategoryById);

module.exports = express.router;