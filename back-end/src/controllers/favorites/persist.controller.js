"use strict";

// model
const User     = require('../../models/users');
const Recipe   = require('../../models/recipes');
const Favorite = require('../../models/favorites');

const addFavorites = async (req, res) => {
  try {
    const { userId, recipeId } = req.body;

    if (!userId || !recipeId) {
      return res.status(400).send({ message: `UserId and recipeId fields are required` });
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(400).send({ message: `User ${userId} not found` });
    }

    const recipe = await Recipe.findOne({ _id: recipeId });

    if (!recipe) {
      return res.status(400).send({ message: `Recipe ${recipeId} not found` });
    }

    const favoriteExists = await isAlreadyFavorite(userId, recipeId);


    if (favoriteExists) {
      return res.status(400).send({ message: `The recipe ${recipeId} has already been added to favorites` });
    }

    let response = await Favorite.create({ userId: userId, recipeId: recipeId });

    return res.status(200).send({ response });
  } catch(error) {
    console.log('Error: ', error);
    return res.status(500).send({ message: "Internal error" });
  }
};

async function isAlreadyFavorite(userId, recipeId) {
  const favorite = await Favorite.findOne({ userId, recipeId })

  return favorite ? true : false;
}

module.exports = {
  addFavorites
}