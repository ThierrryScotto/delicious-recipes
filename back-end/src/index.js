"use strict"

// dependecies
const router = require('./routes/index');

// routes
const categories = require('./routes/_categories');

// constant
const basePath = '/v1';

router.express.use(`${basePath}`, categories);