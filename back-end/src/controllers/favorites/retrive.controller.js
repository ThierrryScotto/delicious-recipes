"use strict"

// Database
const Favorites = require("../../models/favorites");
const Recipes   = require("../../models/recipes");

const getFavorites = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).send({ message: `UserId field is required` });
  }

  const favorites = await Favorites.find({ userId }).populate('users').exec();

  if (!favorites) {
    return res.status(404).send({ message: "favorites not found" });
  }

  let response = { userId: userId, recipes: [] };

  for (let favorite in favorites) {
    response.recipes.push(await Recipes.findOne({ _id: favorites[favorite].recipeId }))
  }

  return res.status(200).send(response);
}

const getFavoriteById = async (req, res) => {
  const { favoriteId } = req.params;

  const favorite = await Favorites.findOne({ _id: favoriteId });

  if (!favorite) {
    return res.status(404).send({ message: `Favorite ${favoriteId} not found` });
  }

  return res.status(200).send(favorite);
}

module.exports = {
  getFavoriteById,
  getFavorites
}