"use strict"

// dependencies
const express = require('./index');

//controllers
const recipesRetriveController = require('../controllers/recipes/retrive.controller');

express.router.get('/recipes', recipesRetriveController.getRecipes);
express.router.get('/recipes/:recipeId', recipesRetriveController.getRecipeById);

module.exports = express.router;