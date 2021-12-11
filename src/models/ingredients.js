'use strict';

// imports
const mongoose = require('../services/database/index');

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
  name:      { type: String, required: true },
  photo_url: { type: String, required: true }
});

module.exports = mongoose.model('ingredients', ingredientsSchema);