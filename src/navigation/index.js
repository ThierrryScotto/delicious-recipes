import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer } from "@react-navigation/native"
//import { createDrawerNavigator } from "@react-navigation/drawer"
//import { createStackNavigator } from "@react-navigation/stack"

const MenuStack = createStackNavigator();
const MenuDrawer = createDrawerNavigator();

import Home from "../screens/Home" 
import Categories from "../screens/categories"

function MenuStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen  name="Home" component={Home} options={{ title:"Menu" }} />
      <MenuStack.Screen name="Recipe" component={Recipe} options={{ title:"Recipe", headerTransparent:true }} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredients"}} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe"}} />
      <MenuStack.Screen name="Search" component={Search} options={{ title:"Search"}} />
    </MenuStack.Navigator>
  )
}

function CategoriesStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Categories" component={Categories} />
      <MenuStack.Screen name="Recipe" component={Recipe} options={{ title:"Recipe", headerTransparent:true }} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredients"}} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe"}} />
      <MenuStack.Screen name="Search" component={Search} options={{ title:"Search"}} />
    </MenuStack.Navigator>
  )
}