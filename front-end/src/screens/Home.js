import React, { useLayoutEffect, useEffect, useState } from "react"
import { 
  Text, 
  View, 
  Image, 
  TouchableHighlight, 
  StyleSheet, 
  FlatList,
  Dimensions 
} from "react-native"
import axios from 'axios';

import { recipes } from "../data/dataArrays.js";
import { getCategoryById } from "../data/MockDataAPI"

const win = Dimensions.get('window');
const ratio = win.width/341; //541 is actual image width

// FULLBANNER
const f_win = Dimensions.get('window');
const f_ratio = win.width/341; //541 is actual image width


export default function Menu({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      axios.get('https://delicious-recipes-dev.herokuapp.com/v1/recipes')
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => console.error(error))
    })()
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableHighlight 
          underlayColor=""
          style={styles.iconeMenu}
          onPress={() => navigation.openDrawer()}
          >
          <Image 
            style={styles.icon}
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
        </View>
        <View style={styles.list}>
          <FlatList  
            style={styles.listInner}
            data={data}
            numColumns={'2'}
            keyExtractor={(item) => item._id}
            renderItem={({item}, index) => (
              <TouchableHighlight 
                key={item} 
                underlayColor="#f1f1f140"
                onPress={() => navigation.navigate("Recipes", { item: item })}
                >
                <View style={styles.containerFlat}>
                  <Image style={styles.image} source={{uri: item.photo_url }} />
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:  'column',
    backgroundColor: '#161616',
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
    height: 240 * f_ratio
  },

  list: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: -10,
    paddingTop: 15,
    paddingBottom: 140,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:  'column',
    width: '98%'
  },
  listInner: {
    height: '100%',
  },
  iconeMenu: {
    marginLeft: 10
  },
  icon: {
    height: 30,
    width: 30,
  },
  containerFlat: {
    borderWidth: 0,
    borderRadius: 5,
    display: 'flex',
    margin: 8,
    marginBottom: 20,
    alignContent: 'stretch',
    backgroundColor: "#FFF",
  }, 
  image: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    width: (win.width-40)/2,
    height: 100 * ratio
  },
  title: {
    alignSelf: 'center',
    color: '#3e4843',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10
  },
  category: {
    alignSelf: 'center',
    fontSize: 15,
    marginBottom: 10,
    padding:6,
    color: "#191d1b",
  }
})