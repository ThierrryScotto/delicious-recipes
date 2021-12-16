import React, { useLayoutEffect, useEffect, useState, Component } from "react"
import { View, Text, Image, TouchableHighlight, FlatList, StyleSheet } from "react-native"
// import { categories, recipes } from "../data/dataArrays"
import axios from 'axios';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/500; //541 is actual image width

const url_categorias = 'https://delicious-recipes-dev.herokuapp.com/v1/categories'
const url_ingredientes = 'https://delicious-recipes-dev.herokuapp.com/v1/ingredients'
const url_receitas = 'https://delicious-recipes-dev.herokuapp.com/v1/recipes'


export default function Categories({ navigation }) {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(url_categorias)
  //     .then(({ data }) => {
  //       setData(data)
  //     })
  //     .catch((error) => console.error(error))
      
  // }, []);

  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    let receitas = []
    let categorias = [];

    Promise.all([
      axios.get('https://delicious-recipes-dev.herokuapp.com/v1/categories'),
      axios.get('https://delicious-recipes-dev.herokuapp.com/v1/recipes'),
    ]).then((response) => {
      const data_recipe = response[0].data
      const data_cat = response[1].data


      data_recipe.map(e => {
        receitas.push(e)
      });

      categorias = data_cat.filter( reci => {
          return reci
      })  

      setData(receitas)
      setCat(categorias);
    });
  }, []);

  // Get CategorieId para renderizar o nome correto da categoria
  function numberOfRecipes(props) {
    let numberRecipe = 0

    cat.map(e => {
      if (props == e.categoryId) {
        numberRecipe++;
      }                                     
    })

    return <Text style={styles.numberRecipe}>{numberRecipe}</Text>;
}


  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableHighlight 
          underlayColor=""
          style={styles.iconeMenu}
          onPress={() => navigation.goBack()}
          >
          <Image style={styles.iconBackArroy} source={require('../assets/icons/backArrow.png')} />
        </TouchableHighlight> 
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableHighlight 
            onPress={() => navigation.push("CategoriesRecipe", { categoryId: item._id, headerName:item.name })} 
            underlayColor="#f1f1f110" 
            >
            <View style={styles.containerRender}>
              <Image style={styles.photoFood} source={{uri: item.photo_url}} />
              <View style={styles.overflow}>
                <Text style={styles.nameCategory}> {item.name} </Text>
                {
                  numberOfRecipes(item._id)
                } 
              </View>
            </View>
          </TouchableHighlight>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#161616',
  },
  containerRender: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#c5c9c7',
    backgroundColor: '#fafafa',
    width: win.width,
    position: 'relative'
  },
  overflow: {
    position: 'absolute',
    left: 0,
    top:0,
    width: '100%',
    height: '100%',
    backgroundColor: '#00000040',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoFood: {
    borderColor: '#c5c9c7',
    borderRadius: 5,
    width: win.width,
    height: 110,
  },
  nameCategory: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#FFF'
  },
  numberRecipe: {
    marginVertical: 1,
    fontSize: 15,
    color: '#FFF'
  },
  bodyHeader: {
    flex: 2,
  },
  iconeMenu: {
    height: 30,
    width: 35,
    borderRadius: 100,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center'
  },
  iconBackArroy: {
    height: 30,
    width: 30,
    padding: 3,
  }
})