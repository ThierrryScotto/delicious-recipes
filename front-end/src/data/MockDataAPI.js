import { Text } from 'react-native';
import React, { Component, useEffect, useState  } from 'react';
import { recipes, categories, ingredients } from './dataArrays';
import axios from 'axios';

const url_categorias = 'https://delicious-recipes-dev.herokuapp.com/v1/categories'
const url_ingredientes = 'https://delicious-recipes-dev.herokuapp.com/v1/ingredients'
const url_receitas = 'https://delicious-recipes-dev.herokuapp.com/v1/recipes'

export async function getCategoryById(categoryId) {
  let category;
  
  try {
      const response = await axios.get(url_categorias)
      response.data.map(e => {
          if (e._id == categoryId) {
              category = e;        
          }
      });
  } catch (error) {
      console.error('error',error);
  }
  
  return category;
}

export async function getIngredientName(ingredientID) {
  let name;

  try {
    const ingredients = await axios.get(url_ingredientes)
    ingredients.data.map(e => {
      if (e._id == ingredientID) {
        name = e.name;
      }
    });
  } catch (error) {
      console.error('error',error);
  }
  
  return name;
}

export async function getIngredientUrl(ingredientID) {
  let url;

  try {
    const ingredients = await axios.get(url_ingredientes)
    ingredients.data.map(data => {
      if (data._id == ingredientID) {
        url = data.photo_url;
      }
    });
  } catch (error) {
      console.error('error',error);
  }
  
  return url;
}

export async function getCategoryName(categoryId) {
  let name;
  
  try {
    const categories = await axios.get(url_categorias)
    categories.data.map(data => {
      if (data._id == categoryId) {
        name = data.name;
      }
    });
  } catch (error) {
      console.error('error',error);
  }

  return name;
}

export async function getRecipes(categoryId) {
  const recipesArray = [];
  
  try {
    const recipes = await axios.get(url_receitas)

    recipes.data.map(data => {
      if (data.categoryId == categoryId) {
        recipesArray.push(data);
      }
    });
  } catch (error) {
      console.error('error',error);
  }

  return recipesArray;
}

// modifica
export async function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];

  try {
    const recipes = await axios.get(url_receitas)

    recipes.data.map(data => {
      data.ingredients.map(index => {
        if (index[0] == ingredientId) {
          recipesArray.push(data);
        }
      });
    });
  } catch (error) {
      console.error('error',error);
  }

  
  return recipesArray;
}

export async function getNumberOfRecipes(categoryId) {
  let count = 0;

  try {
    const recipes = await axios.get(url_receitas)

    recipes.data.map(data => {
      if (data.categoryId == categoryId) {
        count++;
      }
    });
  } catch (error) {
      console.error('error',error);
  }

  
  return count;
}

export async function getAllIngredients(idArray) {
  const ingredientsArray = [];

  try {
    const ingredients = await axios.get(url_ingredientes)

    idArray.map(index => {
      ingredients.data.map(data => {
        if (data._id == index[0]) {
          ingredientsArray.push([data, index[1]]);
        }
      });
    });
  } catch (error) {
      console.error('error',error);
  }

  
  return ingredientsArray;
}

// functions for search
export async function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];

  try {
    const ingredients = await axios.get(url_ingredientes)

    ingredients.data.map(data => {
      if (data.name.toUpperCase().includes(nameUpper)) {
        // data.name.yoUpperCase() == nameUpper
        const recipes = getRecipesByIngredient(data._id);
        const unique = [...new Set(recipes)];
        unique.map(item => {
          recipesArray.push(item);
        });
      }
    });
  } catch (error) {
      console.error('error',error);
  }
  
  const uniqueArray = [...new Set(recipesArray)];

  return uniqueArray;
}

export async function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];

  try {
    const categories = await axios.get(url_categorias)

    categories.data.map(data => {
      if (data.name.toUpperCase().includes(nameUpper)) {
        const recipes = getRecipes(data._id); // return a vector of recipes
        recipes.map(item => {
          recipesArray.push(item);
        });
      }
    });
  } catch (error) {
      console.error('error',error);
  }

  
  return recipesArray;
}

export async function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];

  try {
    const recipes = await axios.get(url_receitas)

    recipes.data.map(data => {
      if (data.title.toUpperCase().includes(nameUpper)) {
        recipesArray.push(data);
      }
    });
  } catch (error) {
      console.error('error',error);
  }
  
  return recipesArray;
}
