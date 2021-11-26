"use strict"

// dependencies
const express = require('./index');

//controllers
const ingredientsRetriveController = require('../controllers/ingredients/retrive.controller.');

express.router.get('/ingredients', ingredientsRetriveController.getIngredients);
express.router.get('/ingredients/:ingredientId', ingredientsRetriveController.getIngredientById);

module.exports = express.router;