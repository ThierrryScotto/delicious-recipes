const axios = require('axios');

const url_categorias = 'https://delicious-recipes-dev.herokuapp.com/v1/categories'
const url_ingredientes = 'https://delicious-recipes-dev.herokuapp.com/v1/ingredients'
const url_recipes = 'https://delicious-recipes-dev.herokuapp.com/v1/recipes'

async function getCategoryName(categoryId) {
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

  return console.log(name);
}

getCategoryName('6191b2918a3377d4f83dcb05')