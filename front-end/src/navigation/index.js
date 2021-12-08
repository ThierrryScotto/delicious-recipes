import React from 'react';
import { Image, View, Button, Text,  ImageBackground, StyleSheet, TouchableOpacity  } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

const MenuStack = createStackNavigator();
const MenuDrawer = createDrawerNavigator();


import Home from "../screens/Home" 
import Recipe from "../screens/recipe" 
import Ingredients from "../screens/ingredients"
import Categories from "../screens/categories"
import CategoriesRecipe from "../screens/categoriesRecipe"


const Stack = createStackNavigator();

function Cover({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/cover.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.text}>
          <Text style={styles.title}>Delicious Recipes</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Home')}
            >
            <Text style={styles.buttonText}>Ir para a Home</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: 200,
    marginBottom: 15
  },
  text: {
    backgroundColor: "#000000c0",
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 20,
    width: 300,
    height: 50,
    borderColor: "#FFF",
  }, 
  buttonText: {
    color: "#FFF"
  },
});


function MenuStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen  name="Home" component={Home} options={{ title:"Home", headerTransparent:true, headerTitleAlign: 'center', headerTintColor: 'white'  }} />
      <MenuStack.Screen name="Recipes" component={Recipe} options={{ title:"", headerTransparent:true }} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe"}} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredientss", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />

    </MenuStack.Navigator>
  )
}

function CategoriesStackScreen({ navigation }) {
  return (
    
    <MenuStack.Navigator>
      <MenuStack.Screen name="Categories" component={Categories} options={{headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="Recipe" component={Recipe} options={{ title:"", headerTransparent:true }} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredients", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
    </MenuStack.Navigator>
  )
}


export default function Route() {
  return (
      <NavigationContainer>
        <MenuDrawer.Navigator drawerType="front" initialRouteName="Cover">
          <MenuDrawer.Screen  name="Cover" component={Cover} />
          <MenuDrawer.Screen  name="Home" component={MenuStackScreen} />
          <MenuDrawer.Screen  name="Categories" component={CategoriesStackScreen} />
        </MenuDrawer.Navigator>
      </NavigationContainer>
  )
} 

