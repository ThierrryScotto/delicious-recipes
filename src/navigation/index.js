import React from 'react';
import { Image } from "react-native"
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


function MenuStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen  name="Home" component={Home} options={{ title:"Home" }} />
      <MenuStack.Screen name="Recipe" component={Recipe} options={{ title:"Recipe", headerTransparent:true }} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe"}} />
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredients"}} />
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


function SearchStackScreen({ navigation }) {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Search" component={Search} options={{ title:""}} />
      <MenuStack.Screen name="Categories" component={Categories} />
      <MenuStack.Screen name="Recipe" component={Recipe} options={{ title:"Recipe", headerTransparent:true }} /> 
      <MenuStack.Screen name="Ingredients" component={Ingredients} options={{ title:"Ingredients"}} />
      <MenuStack.Screen name="CategoriesRecipe" component={CategoriesRecipe} options={{ title:"CategoriesRecipe"}} />
    </MenuStack.Navigator>
  )
}


export default function Route() {
  return (
    <NavigationContainer>
      <MenuDrawer.Navigator drawerType="front" >
        <MenuDrawer.Screen  name="Home" component={MenuStackScreen} />
        <MenuDrawer.Screen  name="Categories" component={CategoriesStackScreen} />
        <MenuDrawer.Screen  name="Source" component={SearchStackScreen} />
      </MenuDrawer.Navigator>
    </NavigationContainer>
  )
} 

