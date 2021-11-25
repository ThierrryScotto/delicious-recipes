'use strict';

// imports
const mongoose = require('../services/database/index');

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name:      { type: String, required: true },
  photo_url: { type: String, required: true }
});

module.exports = mongoose.model('categories', categoriesSchema);