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

// FULLBANNER
const f_win = Dimensions.get('window');
const f_ratio = win.width/341; 


export default function Home(props) {
  const user = props.item;
  const navigation  = props.navigation;
  console.log('params', props);


  const [data, setData] = useState([]);
  const [categorie, setCat] = useState([]);

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