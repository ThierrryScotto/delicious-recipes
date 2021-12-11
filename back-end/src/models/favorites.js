'use strict';

// imports
const mongoose = require('../services/database/index');

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  userId:    { type: Schema.Types.ObjectId, ref: 'users', required: true},
  recipeId:  { type: Schema.Types.ObjectId, ref: 'recipes', required: true }
},{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('favorites', favoritesSchema);