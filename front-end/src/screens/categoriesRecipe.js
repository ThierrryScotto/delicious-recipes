import React, { useEffect, useState, useLayoutEffect } from "react"
import { Text, View, FlatList, StyleSheet, Image, TouchableHighlight, Dimensions} from "react-native"
import { recipes } from "../data/dataArrays"
import { getCategoryById } from "../data/MockDataAPI"

const win = Dimensions.get('window');
const ratio = win.width/341; //541 is actual image width

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
    <View style={styles.container}>
      <FlatList 
        style={styles.listInner}
        keyExtractor={(item, index) => index.toString()}
        data={recipeSelected}
        numColumns={'2'}
        renderItem={({item}) => (
          <TouchableHighlight 
            underlayColor="#f1f1f140"
            onPress={() => navigation.push("Recipe", { item: item })}
          >
            <View style={styles.containerFlat}>
              <Image style={styles.image} source={{ uri:item.photo_url }} />
              <Text style={styles.title}> { item.title } </Text>
              <Text style={styles.category}> {setCategory(item.categoryId)} </Text>
            </View>
        </TouchableHighlight>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:  'column',
    backgroundColor: '#161616'
    
  },
  iconeMenu: {
    marginLeft: 10
  },
  containerFlat: {
    borderWidth: 0,
    borderRadius: 13,
    margin: 8,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#FFF",
  }, 
  listInner: {

  },
  image: {  
    flex: 1,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    width: (win.width-35)/2,
    height: 100 * ratio
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