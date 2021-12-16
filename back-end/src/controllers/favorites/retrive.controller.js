"use strict"

// Database
const Favorites = require("../../models/favorites");
const Recipes   = require("../../models/recipes");

const getFavorites = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).send({ message: `UserId field is required` });
  }

  const favorites = await Favorites.find({ userId }).populate({ path: 'recipes' });

  if (!favorites) {
    return res.status(404).send({ message: "favorites not found" });
  }

  return res.status(200).send(favorites);
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