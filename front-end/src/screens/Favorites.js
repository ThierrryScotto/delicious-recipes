import React, { useLayoutEffect, useEffect, useState, Component } from "react"
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

const win = Dimensions.get('window');
const ratio = win.width/341; 


export default function Search({navigation}) {
  const [data, setData] = useState([]);
  const [categorie, setCat] = useState([]);

  useEffect(() => {
    let receitas = []
    let categorias = [];

    Promise.all([
      axios.get('https://delicious-recipes-dev.herokuapp.com/v1/categories'),
      // axios.get('https://delicious-recipes-dev.herokuapp.com/v1/recipes'),
      axios.get('https://delicious-recipes-dev.herokuapp.com/v1/favorites'),
    ]).then((response) => {
      const data_recipe = response[0].data
      const data_cat = response[1].data
      // const data_favorites = response[2].data


      data_recipe.map(e => {
        receitas.push(e)
      });

      categorias = data_cat.filter( reci => {
          return reci
      })  

      setData(categorias)
      setCat(receitas);
    });
  }, []);

  // Get CategorieId para renderizar o nome correto da categoria
  function CatText(props) {
    let cat = ''
    categorie.map(e => {
      if (e._id == props) {
        cat = e.name
      }                                     
    })

    return <Text style={styles.category}>{cat}</Text>;
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
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
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
          <FlatList  
            style={styles.listInner}
            data={data}
            numColumns={'2'}
            keyExtractor={(item) => item._id}
            renderItem={({item}, index) => (
              <TouchableHighlight 
                key={index} 
                underlayColor="#f1f1f140"
                onPress={() => navigation.navigate("Recipes", { item: item })}
                >
                <View style={styles.containerFlat}>
                 
                  <Image style={styles.image} source={{uri: item.photo_url }} />
                  <Text style={styles.title}> { item.title } </Text>
                  
                  <Text style={styles.category}> 
                  {
                    CatText(item.categoryId)
                  } 
                  </Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
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