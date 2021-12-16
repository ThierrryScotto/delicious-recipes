import React, { useLayoutEffect, useEffect, useState, Component } from "react"
import { 
    Image, 
    View, 
    Button, 
    Text,  
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity  
} from "react-native"

export default function Cover({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/cover.jpg')} resizeMode="cover" style={styles.image}>
          <View style={styles.text}>
            <Text style={styles.title}>Delicious Recipes</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Registry')}
              >
              <Text style={styles.buttonText}>Registry</Text>
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
  