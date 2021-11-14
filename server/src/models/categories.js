'use strict';

// imports
const mongoose         = require('../services/db/index');

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name:      { type: String, required: true, select: false },
  photo_url: { type: String, required: true, select: false }
});

module.exports = mongoose.model('categories', categoriesSchema);
