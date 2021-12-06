import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native"
import { getCategoryName } from "../data/MockDataAPI"

export default function BodyRecipe(props) {
  const item = props.item;
  const navigation  = props.navigation;

  const getName = (id) => {
    return getCategoryName(id)
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}> {item.title} </Text>
      <Text style={styles.category}> {getName(item.categoryId)} </Text>

      <View style={styles.time} >        
        <Image 
          style={{marginTop: 10}}
          source={require('../assets/icons/time.png')}
        />
        <Text style={styles.textTime}> {item.time} minutos </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.push("Ingredients", {ingredients: item.ingredients})}
        >
        <Text style={styles.buttonText}> View Ingredients</Text>
      </TouchableOpacity>

      <View style={styles.description}>
        <Text> {item.description} </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: "#191d1b"
  },
  category: {
    color: "#1ac06d",
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
  }, 
  time: {
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  textTime: {
    marginTop: 12,
    fontWeight: 'bold'
  }, 
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 20,
    width: 300,
    height: 50,
    borderColor: "#00ff80",
  }, 
  buttonText: {
    color: "#00ff80"
  },
  description: {
    marginTop: 40,
    width: 350,
    justifyContent: 'center'
  }
})