import React from "react"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MenuStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>first screen</Text>
      <StatusBar style="auto" />
    </View>
  )
} 
