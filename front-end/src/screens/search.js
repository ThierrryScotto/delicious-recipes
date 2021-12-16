import React, { useLayoutEffect, useEffect, useState, Component } from "react"
import { 
  Text, 
  View, 
  Image, 
  TouchableHighlight, 
  StyleSheet, 
  FlatList,
  TextInput,
  Dimensions 
} from "react-native"
import axios from 'axios';
import { SearchBar } from 'react-native-elements';

const win = Dimensions.get('window');
const ratio = win.width/341; 


export default function Search({navigation}) {
  const [data, setData] = useState([]);
  const [categorie, setCat] = useState([]);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    axios.get('https://delicious-recipes-dev.herokuapp.com/v1/recipes')
      .then((response) => {
        setFilteredDataSource(response.data);
        setMasterDataSource(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };


  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <TouchableHighlight 
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
    );
  };
  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item._id + ' Title : ' + item.title);
  };


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
       <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search"
        />
      <View style={styles.list}>
          <FlatList  
            style={styles.listInner}
            data={filteredDataSource}
            numColumns={'2'}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyHeader: {
    flex: 2,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
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