const axios = require('axios');

const url_categorias = 'https://delicious-recipes-dev.herokuapp.com/v1/categories'
const url_ingredientes = 'https://delicious-recipes-dev.herokuapp.com/v1/ingredients'
const url_recipes = 'https://delicious-recipes-dev.herokuapp.com/v1/recipes'

Promise.all([
  axios.get('https://delicious-recipes-dev.herokuapp.com/v1/categories'),
  axios.get('https://delicious-recipes-dev.herokuapp.com/v1/recipes'),
]).then((response) => {
  const data_cat = response[0].data
  const data_recipe = response[1].data

  data_recipe.map(e => {
    console.log('01-', e._id)
  });

  data_cat.map(e => {
    console.log('02-', e.name)
  });

});