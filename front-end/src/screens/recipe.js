import React, { useRef, useLayoutEffect } from "react";
import { StyleSheet, View, TouchableHighlight, Image, ScrollView, LogBox } from "react-native";

import CarouselHeader from "../components/carouselHeader"
import BodyRecipe from "../components/bodyRecipe"

export default function Recipe({ navigation, route}) {
  const { item } = route.params;
  // console.disableYellowBox = true;
  LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
  LogBox.ignoreAllLogs();//Hide all warning notifications on front-end


  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableHighlight 
          underlayColor=""
          style={styles.iconeMenu}
          onPress={() => navigation.goBack()}
          >
           <Image style={styles.iconBackArroy} source={require('../assets/icons/backArrow.png')} />
        </TouchableHighlight> 
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
        <CarouselHeader item={item}/>
      <View style={styles.bodyHeader}>
        <BodyRecipe item={item} navigation={navigation}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  bodyHeader: {
    flex: 2,
    width: '98%',
    alignSelf: 'center',
  },
  iconeMenu: {
    height: 40,
    width: 45,
    borderRadius: 100,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center'
  },
  iconBackArroy: {
    height: 30,
    width: 30,
    padding: 3,
  }
});
