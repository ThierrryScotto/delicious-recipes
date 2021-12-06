import React, { useLayoutEffect } from "react"
import { Text, View, Image, TouchableHighlight, StyleSheet, FlatList,  } from "react-native"
import { SearchBar } from 'react-native-elements';
// import { recipes } from "../data/dataArrays.js";
// import { getCategoryById } from "../data/MockDataAPI"

export default function Search({navigation}) {

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
          <SearchBar
            containerStyle={{ 
              backgroundColor: 'transparent',
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent',
              flex: 1,
              marginLeft: 20,
              width: 200
            }}
            inputContainerStyle={{
              backgroundColor: '#EDEDED'
            }}
            inputStyle={{
              backgroundColor: '#EDEDED',
              borderRadius: 10,
              color: 'black'
            }}
            searchIcond
            clearIcon
            round
            placeholder="Search"
            onChangeText={() => {}}
            value={''}
          />
        </View>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
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

  return (
    <View style={styles.container}>

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
  }
})