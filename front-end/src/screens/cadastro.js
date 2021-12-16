import React, { useLayoutEffect, useEffect, useState, Component } from "react"
import { 
    View, 
    Text,  
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    ScrollView,
    Button,
    Alert
} from "react-native"
import Constants from "expo-constants";
import axios from 'axios';
// testeemail@teste.com
// 123456789

export default function Cadastro({ navigation }) {
  
  const baseUrl = "https://delicious-recipes-dev.herokuapp.com";

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onSubmitFormHandler = async (event) => {
    if (!password.trim() || !email.trim()) {
      alert("Password or Email is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/v1/users`, {
        password,
        email,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        
        navigation.navigate('Login')
        setIsLoading(false);
        setPassword('');
        setEmail('');
      } else {
        throw new Error("An error has occurrede");
      }
    } catch (error) {
      alert("Email já cadastrado");
      navigation.navigate('Login')
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../assets/cover.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.inner}>
          <View style={styles.wrapper}>
            {isLoading ? (
              <Text style={styles.title}> Creating resource </Text>
            ) : (
              <Text style={styles.title}>Create new user</Text>
            )}
            
          </View>
          <View style={styles.wrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ffffff"
              style={styles.input}
              value={email}
              editable={!isLoading}
              onChangeText={onChangeEmailHandler}
            />
          </View>
          <View style={styles.wrapper}>
          <TextInput
              placeholder="Password"
              placeholderTextColor="#ffffff"
              style={styles.input}
              secureTextEntry={true}
              value={password}
              editable={!isLoading}
              onChangeText={onChangePasswordHandler}
            />
            
          </View>
          <View style={styles.wrapper}>
            <Button
              title="Submit"
              onPress={onSubmitFormHandler}
              style={styles.submitButton}
              disabled={isLoading}
            />
          </View>
          <View style={styles.wrapper}>
              <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
                style={styles.submitButton}
              />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  inner: {
    backgroundColor: "#000000c0",
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  formHeading: {
    color: "#ffffff",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  wrapper: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 300,
    textAlignVertical: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    color: "#ffffff",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
    width: 300
  },
});
