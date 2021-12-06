import React, { useLayoutEffect } from "react"
import { Text, View, Image, TouchableHighlight, StyleSheet, FlatList } from "react-native"
import { recipes } from "../data/dataArrays.js";
import { getCategoryById } from "../data/MockDataAPI"

import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width/341; //541 is actual image width

// FULLBANNER
const f_win = Dimensions.get('window');
const f_ratio = win.width/341; //541 is actual image width


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
        <View style={styles.fullbanner}>
          <Image style={styles.fullbannerImg} source={require('../assets/fullbaner.jpg')} />
          <View style={styles.overlay}>
            <Text style={styles.fullbannerTitle}> 
              Delicious Recipes
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <FlatList  
            style={styles.listInner}
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
                    style={styles.image} 
                    source={{ uri:item.photo_url }}
                  />
                  <Text style={styles.title}> { item.title } </Text>
                  <Text style={styles.category}> {setCategory(item.categoryId)} </Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:  'column',
    backgroundColor: '#39f0fd',
  },
  fullbanner: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:  'column'
  },
  fullbannerTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '700',
    height: '100%',
    textAlign: 'center',
    maxWidth: 150,
    alignSelf: 'center'
  },
  fullbannerImg: {
    width: f_win.width,
    height: 140 * f_ratio
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:  'column',
    position: 'absolute',
    width: f_win.width,
    backgroundColor: '#00000070',
  },
  list: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -10,
    paddingTop: 15,
    paddingBottom: 175,
  },
  listInner: {
    paddingBottom: 105,
    height: '100%'

  },
  iconeMenu: {
    marginLeft: 10
  },
  containerFlat: {
    borderWidth: 0,
    borderRadius: 13,
    margin: 10,
    marginBottom: 20,
    backgroundColor: "#FFF",
  }, 
  image: {
    flex: 1,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    width: (win.width-40)/2,
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