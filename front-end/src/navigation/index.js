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

import Search from "../screens/search"
import Cover from "../screens/Cover"
import Favorites from "../screens/Favorites"

import Login from "../screens/login"
import Cadastro from "../screens/cadastro"

const Stack = createStackNavigator();


function MenuStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen  name="Home" component={Home} options={{ title:"Home", headerTransparent:true, headerTitleAlign: 'center', headerTintColor: 'white'  }} />
      <MenuStack.Screen name="Recipes" component={Recipe} options={{ title:"", headerTransparent:true }} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe"}} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredientss", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="Search" component={Search} options={{ title:"Search",  headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      {/* <MenuStack.Screen name="Favorites" component={Favorites} options={{ title:"Favorites",  headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} /> */}
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
      <MenuStack.Screen name="Search" component={Search} options={{ title:"Search", headerTitleAlign: 'center',  headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      {/* <MenuStack.Screen name="Favorites" component={Favorites} options={{ title:"Favorites",  headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} /> */}
    </MenuStack.Navigator>
  )
}


function SearchStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Search" component={Search} options={{ title:"Search", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="Categories" component={Categories} options={{headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="Recipe" component={Recipe} options={{ title:"", headerTransparent:true }} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredients", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      {/* <MenuStack.Screen name="Favorites" component={Favorites} options={{ title:"Favorites",  headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} /> */}
   </MenuStack.Navigator>
  )
}

function LoginStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Cadastro" component={Cadastro} options={{ title:"", headerTransparent:true, headerTitleAlign: 'center', headerTintColor: 'white'  }} />
      <MenuStack.Screen name="Login" component={Login} options={{ title:"", headerTransparent:true, headerTitleAlign: 'center', headerTintColor: 'white'  }} />
      <MenuStack.Screen name="Search" component={Search} options={{ title:"Search", headerTitleAlign: 'center'}} />
      <MenuStack.Screen name="Categories" component={Categories} options={{headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="Recipe" component={Recipe} options={{ title:"", headerTransparent:true }} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredients", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe", headerTitleAlign: 'center', headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} />
      {/* <MenuStack.Screen name="Favorites" component={Favorites} options={{ title:"Favorites",  headerTintColor: 'white' , headerStyle: {backgroundColor: '#161616'}}} /> */}
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
          <MenuDrawer.Screen  name="Search" component={SearchStackScreen} />
          <MenuDrawer.Screen  name="Login" component={Login} />
          <MenuDrawer.Screen  name="Cadastro" component={Cadastro} />
          {/* <MenuDrawer.Screen  name="Favorites" component={Favorites} /> */}

        </MenuDrawer.Navigator>
      </NavigationContainer>
  )
} 

