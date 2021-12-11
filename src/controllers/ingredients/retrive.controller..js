"use strict"

// Database
const Ingredients = require("../../models/ingredients");

const getIngredients = async (req, res) => {
  const ingredients = await Ingredients.find();

  if (!ingredients) {
    return res.status(404).send({ message: "ingredients not found" });
  }

  return res.status(200).send(ingredients);
}

const getIngredientById = async (req, res) => {
  const { ingredientId } = req.params;

  const ingredient = await Ingredients.findOne({ _id: ingredientId });

  if (!ingredient) {
    return res.status(404).send({ message: `Ingredient ${ingredient} not found` });
  }

  return res.status(200).send(ingredient);
}

module.exports = {
  getIngredientById,
  getIngredients
}