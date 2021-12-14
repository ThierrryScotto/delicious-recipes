import React, { useLayoutEffect,  useEffect, useState  } from "react"
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

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url_categorias)
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => console.error(error))
      
  }, []);


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

  async function countNumberRecipe(id) {
      let numberRecipe = 0;

      try {
        const recipes = await axios.get(url_receitas)

        recipes.data.map(value => { 
          if (id === value.categoryId)
          numberRecipe++;
        })
      } catch (error) {
          console.error('error',error);
      }
      
      return numberRecipe;
  }

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
                {/* <Text style={styles.numberRecipe}> {countNumberRecipe(item._id)} Recipes </Text> */}
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