"use strict"

// dependecies
const router = require('./routes/index');

// routes
const categories  = require('./routes/_categories');
const ingredients = require('./routes/_ingredients');
const favorites   = require('./routes/_favorites');
const recipes     = require('./routes/_recipes');
const users       = require('./routes/_users');
const auth        = require('./routes/_auth');

// constant
const basePath = '/v1';

router.express.use(`${basePath}`, categories);
router.express.use(`${basePath}`, ingredients);
router.express.use(`${basePath}`, favorites);
router.express.use(`${basePath}`, recipes);
router.express.use(`${basePath}`, users);
router.express.use(`${basePath}`, auth);