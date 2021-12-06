import React from "react"
import { View, Text, FlatList, TouchableHighlight, Image, StyleSheet } from "react-native"
import { getIngredientUrl } from "../data/MockDataAPI"
import { getIngredientName } from "../data/MockDataAPI"

export default function Ingredients({ navigation, route }) {
  let { ingredients }  = route.params;

  return (
    <View style={styles.container}>
      <FlatList 
        data={ingredients}
        numColumns={'3'}
        keyExtractor={(index) => index.toString() }
        renderItem={({ item }) => (
          <View style={styles.info}>
            <TouchableHighlight >
              <Image 
                style={{ height: 100, width: 130, borderRadius: 100}}
                source={{ uri: getIngredientUrl(item[0]) }}/>
            </TouchableHighlight>
            <Text style={styles.nameIngredient}> {getIngredientName(item[0])} </Text>
            <Text style={styles.amount}> {item[1]} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  info: {
    marginTop: 30,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 135
  },
})