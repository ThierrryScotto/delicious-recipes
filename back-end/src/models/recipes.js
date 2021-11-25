'use strict';

// imports
const mongoose = require('../services/database/index');

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  categoryId:   { type: Schema.Types.ObjectId, ref: 'categories'},
  photo_url:    { type: String, required: true },
  time:         { type: String, required: true },
  description:  { type: String, required: true },
  ingredients:  [ { type: Array, required: true } ],
  photosArray:  [ { type: Array, required: false } ]
});

module.exports = mongoose.model('recipes', recipesSchema);