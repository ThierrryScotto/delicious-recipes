"use strict"

// Database
const Recipes = require("../../models/recipes");

const getRecipes = async (req, res) => {
  const recipes = await Recipes.find();

  if (!recipes) {
    return res.status(404).send({ message: "recipes not found" });
  }

  return res.status(200).send(recipes);
}

const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;

  const recipes = await Recipes.findOne({ _id: recipeId });

  if (!recipes) {
    return res.status(404).send({ message: `Recipes ${recipeId} not found` });
  }

  return res.status(200).send(recipes);
}

module.exports = {
  getRecipeById,
  getRecipes
}