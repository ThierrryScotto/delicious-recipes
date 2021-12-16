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


export default function Login({ navigation }) {

    const baseUrl = "https://delicious-recipes-dev.herokuapp.com";

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const [user, setUser] = useState("");
  
    const onChangePasswordHandler = (password) => {
      setPassword(password);
    };
  
    const onChangeEmailHandler = (email) => {
      setEmail(email);
    };
  
    const onSubmitFormHandler = async (event) => {
      if (!password.trim() || !email.trim()) {
        Alert.alert("Password or Email is invalid");
        
        return;
      }
      setIsLoading(true);
      await axios.post(`${baseUrl}/v1/authenticate`, {
        password,
        email,
        })
        .then(response => { 
          if (response.status === 201) {
            alert(`You have loged: ${JSON.stringify(response.data)}`);

            setIsLoading(false);
            setPassword('');
            setEmail('');
          } else {
            var user_id = response.data.user._id
            alert(`Loged`);
             
            navigation.setṔarams
            navigation.navigate('Home', {user: user_id})
            setIsLoading(false)                                                                                                                                  ;
          }
        })
        .catch(response => {
            alert(`An error has occurred ${ JSON.stringify(response.data)}`);
            setIsLoading(false);
        });
      };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground source={require('../assets/cover.jpg')} resizeMode="cover" style={styles.image}>
       
          <View style={styles.inner}>
            <View style={styles.wrapper}>
              {isLoading ? (
                <Text style={styles.title}> Entering... </Text>
              ) : (
                <Text style={styles.title}>Login area</Text>
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
            {/* <View style={styles.wrapper}>
              <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
                style={styles.submitButton}
              />
            </View> */}
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
    title: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 15
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    formHeading: {
      color: "#ffffff",
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
    inner: {
      backgroundColor: "#000000c0",
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  