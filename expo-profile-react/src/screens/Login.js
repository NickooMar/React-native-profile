import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import FilledButton from "../components/FilledButton";
import { Heading } from "../components/Heading";
import { TextButton } from "../components/TextButton";
import axios from "axios";

export function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {

    axios.post('http://10.0.2.2:4000/login', {
      username,
      password
    }, { withCredentials: true }).then((res) => {
      if(res.data === 'success'){
        navigation.navigate('Profile')
      }
    }, () => {
      Alert.alert('Error', "Incorrect user or password", [{text: "Ok!", onPress:() => {console.log('Login Alert Closed')}}])
    })


  }


  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>



      <TextInput
        style={styles.input}
        placeholder={"Username"}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput style={styles.input} placeholder={"Password"} 
      secureTextEntry
      onChangeText={(e) => setPassword(e)}
       />

      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={login}
      />

      <TextButton
        title={"Have u an account? Create one!"}
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 32,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
});
