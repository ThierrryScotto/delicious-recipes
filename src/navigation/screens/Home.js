import React, { useLayoutEffect } from "react"
import { Text, View, Image, TouchableHighlight, StyleSheet, FlatList,  } from "react-native"
import { recipes } from "../data/dataArrays.js";
import { getCategoryById } from "../data/MockDataAPI"

export default function Menu({navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableHighlight 
          underlayColor=""
          style={styles.iconeMenu}
          onPress={() => navigation.openDrawer()}
          >
          <Image 
            source={require('../assets/icons/menu.png')}
            />
        </TouchableHighlight> 
      ),
    });
  }, [navigation]);

  function setCategory(id) {
    let obj = getCategoryById(id)
    if (obj) return obj.name
    else return ''
  }

  return (
    <View style={styles.container}>
        <FlatList 
          data={recipes}
          numColumns={'2'}
          keyExtractor={(item) => item.recipeId}
          renderItem={({item}) => (
            <TouchableHighlight 
              underlayColor="#f1f1f1"
              onPress={() => navigation.push("Recipe", { item: item })}
              >
              <View style={styles.containerFlat}>
                <Image
                  style={{ height:140, width: 180, borderRadius: 13}} 
                  source={{ uri:item.photo_url }}
                />
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