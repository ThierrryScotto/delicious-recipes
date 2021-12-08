import React from "react"
import { View, Text, FlatList, TouchableHighlight, Image, StyleSheet, Dimensions } from "react-native"
import { getIngredientUrl } from "../data/MockDataAPI"
import { getIngredientName } from "../data/MockDataAPI"


const win = Dimensions.get('window');

export default function Ingredients({ navigation, route }) {
  let { ingredients }  = route.params;

  return (
    <View style={styles.container}>
      <FlatList 
        data={ingredients}
        numColumns={'2'}
        keyExtractor={(index) => index.toString() }
        renderItem={({ item }) => (
          <View style={styles.info}>
            <TouchableHighlight >
              <Image 
                style={styles.image}
                source={{ uri: getIngredientUrl(item[0]) }}/>
            </TouchableHighlight>

            <View>
              <Text style={styles.nameIngredient}> {getIngredientName(item[0])} </Text>
              <Text style={styles.amount}> {item[1]} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 10
  },
  amount: {
    textAlign: 'center'
  },
  nameIngredient: {
    textAlign: 'center'
  },
  info: {
    marginTop: 30,
    margin: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 2.5,
    width:(win.width - 35) / 2,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  image: {
    height: 100, 
    width: 130, 
    borderRadius: 100,
    marginRight: 15,
    borderRadius: 10,
    borderWidth: 1,
  }
})