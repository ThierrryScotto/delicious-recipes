import React, { useLayoutEffect } from "react"
import { View, Text, Image, TouchableHighlight, FlatList, StyleSheet } from "react-native"
import { categories, recipes } from "../data/dataArrays"


export default function Categories({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableHighlight 
          underlayColor=""
          style={styles.iconeMenu}
          onPress={() => navigation.goBack()}
          >
          <Image 
            style={styles.iconBackArroy}
            source={require('../assets/icons/backArrow.png')}
            />

        </TouchableHighlight> 
      ),
    });
  }, [navigation]);

  function countNumberRecipe(id) {
    let numberRecipe = 0;
    recipes.map(value => { 
      if (id === value.categoryId)
      numberRecipe++;
    })
    return numberRecipe;
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableHighlight 
            onPress={() => navigation.push("CategoriesRecipe", { categoryId: item.id, headerName:item.name })} 
            underlayColor="#f1f1f1" 
            >
            <View style={styles.containerRender}>
              <Image style={styles.photoFood} source={{uri:item.photo_url}} />
              <Text style={styles.nameCategory}> {item.name} </Text>
              <Text style={styles.numberRecipe}> {countNumberRecipe(item.id)} Recipes </Text>
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
  },
  containerRender: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
    borderWidth: 0.4,
    borderRadius: 30,
    borderColor: '#c5c9c7',
    backgroundColor: '#fafafa',
  },
  photoFood: {
    borderColor: '#c5c9c7',
    height: 150,
    width: 390,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  nameCategory: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#191d1b'
  },
  numberRecipe: {
    marginVertical: 1,
    fontSize: 15
  },
  bodyHeader: {
    flex: 2,
  },
  iconeMenu: {
    height: 30,
    width: 35,
    borderRadius: 100,
    backgroundColor: "#fafafa",
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center'
  },
  iconBackArroy: {
    height: 20,
    width: 20,
    padding: 3,
  }
})