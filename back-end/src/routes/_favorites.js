"use strict"

// dependencies
const express = require('./index');

//controllers
const favoritesPersisteController = require('../controllers/favorites/persist.controller');
const favoritesRetriveController  = require('../controllers/favorites/retrive.controller');

// middleware
const checkToken = require('../middleware/authorizer.middleware')

express.router.post('/favorites', checkToken, favoritesPersisteController.addFavorites);
express.router.get('/favorites', checkToken, favoritesRetriveController.getFavorites);
express.router.get('/favorites/:favoriteId', checkToken, favoritesRetriveController.getFavoriteById);

module.exports = express.router;