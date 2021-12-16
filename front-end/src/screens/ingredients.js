import React, { useLayoutEffect, useEffect, useState, Component } from "react"
import { Animated, View, Text, FlatList, TouchableHighlight, Image, StyleSheet, Dimensions } from "react-native"
import axios from 'axios';

const win = Dimensions.get('window');
const url_ingredientes = 'https://delicious-recipes-dev.herokuapp.com/v1/ingredients'

export default function Ingredients({ navigation, route }) {
  const [data, setData] = useState([]);
  
  let { ingredients }  = route.params;

  useEffect(() => {
    let ingredientes = []

    axios.get(url_ingredientes)
    .then((response) => {
      const data_recipe = response.data

     
      setData(data_recipe)
    });
  }, []);

  function IngredienteName(props) {
    let name = ''
    data.forEach(e => {
      if (e._id == props) {
        name = e.name
        // console.log(e.name);
      }                                     
    })
    
    return <Text style={styles.nameIngredient}>{name}</Text>;
  }

  function IngredienteUrl(props) {
    let img = ''
    
    data.forEach(e => {
      if (e._id == props) {
        img = e.photo_url
        console.log('foto', JSON.stringify(e.photo_url));
      }
    });


    return <Image style={styles.image} source={{ uri: img }}/>

  }
  

  return (
    <View style={styles.container}>
      <FlatList 
        data={ingredients}
        numColumns={'2'}
        keyExtractor={(index) => index }
        renderItem={({ item }) => (
          <View style={styles.info}>
            <View>
              <TouchableHighlight >
              {
                IngredienteUrl(item[0])
              }
              </TouchableHighlight>
              {
                IngredienteName(item[0])
              }
              <Text style={styles.amount}> {item[1]} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f140',
    padding: 10
  },
  amount: {
    textAlign: 'center'
  },
  nameIngredient: {
    textAlign: 'center'
  },
  info: {
    marginTop: 30,
    margin: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 2.5,
    width:(win.width - 35) / 2,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  image: {
    height: 100, 
    width: 130, 
    borderRadius: 100,
    marginRight: 15,
    borderRadius: 10,
    borderWidth: 1,
  }
})