import React, { useEffect, useState, useLayoutEffect } from "react"
import { Text, View, FlatList, StyleSheet, Image, TouchableHighlight} from "react-native"
import { recipes } from "../data/dataArrays"
import { getCategoryById } from "../data/MockDataAPI"

export default function CategoriesRecipe({ navigation, route }) {
  const [recipeSelected, setRecipeSelected] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.headerName
    })
  }, [])

  useEffect(() => {
    let { categoryId } = route.params;
    let info = [];
    info = recipes.filter( reci => {
      return reci.categoryId === categoryId
    })
    setRecipeSelected(info);
  }, [])

  function setCategory(id) {
    let obj = getCategoryById(id)
    if (obj) return obj.name
    else return ''
  }

  return (
      <FlatList 
        keyExtractor={(item, index) => index.toString()}
        data={recipeSelected}
        numColumns={'2'}
        renderItem={({item}) => (
          <TouchableHighlight 
            underlayColor="#f1f1f1"
            onPress={() => navigation.push("Recipe", { item: item })}
          >
            <View style={styles.containerFlat}>
              <Image style={{ height:140, width: 180, borderRadius: 13}} source={{ uri:item.photo_url }} />
              <Text style={styles.title}> { item.title } </Text>
              <Text style={styles.category}> {setCategory(item.categoryId)} </Text>
            </View>
        </TouchableHighlight>
        )}
        />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconeMenu: {
    marginLeft: 10
  },
  containerFlat: {
    borderWidth: 1,
    borderRadius: 13,
    borderColor: "#f1f1f1",
    margin: 10,
    marginTop: 20,
    backgroundColor: "#fafafafa"
  }, 
  title: {
    alignSelf: 'center',
    color: '#3e4843',
    fontWeight: 'bold',
    fontSize: 15
  },
  category: {
    alignSelf: 'center',
    fontSize: 15,
    margin: 10,
    padding:6,
    color: "#191d1b",
  }
})