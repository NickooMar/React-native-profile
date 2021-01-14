import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Alert, TextInput } from "react-native";
import FilledButton from "../components/FilledButton";
import { Heading } from "../components/Heading";
import { Error } from "../components/Error";
import { IconButton } from "../components/IconButton";
import axios from "axios";


export function RegistrationScreen({ navigation }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const register = () => {
    if(password === confirmPassword){
      axios.post('http://10.0.2.2:4000/register'/*Aqui debera ir la direccion de ip que corresponda al dispositivo que estemos usando
      : Android Studio Emulator = 10.0.2.2 seguido de la ubicacion de la API y el endpoint
      : En la computadora donde se esta ejecutando el codigo sera localhost  */, {
        username,
        password,
        confirmPassword
      }, { withCredentials: true }).then((res) => {
        console.log(res)
        if(res.data === 'success'){
          navigation.navigate('Login')
          Alert.alert('Well Done!', 'The user was created Successfully', [{text: 'Ok!', onPress: () => console.log('Alert of Success Closed')}])
        } else {
          Alert.alert('OOPS!', 'User Already Exists', [
            {text: 'Ok!', onPress:() => console.log('Alert of Error closed')}
          ])
        }
      })
    } else {
      Alert.alert("OOPS!", "Password Doesn't Match", [{text: 'Ok!', onPress:() => console.log('Alert Error Closed')}])
    }
  }




  return (
    <View style={styles.container}>
      <Heading style={styles.title}>REGISTER</Heading>

      <IconButton
        style={styles.closeIcon}
        name={"close-circle-outline"}
        onPress={() => {
          navigation.pop();
        }}
      />

      <Error error={""} />

      <TextInput
        style={styles.input}
        placeholder={"Username"}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput style={styles.input} placeholder={"Password"} onChangeText={(e) => setPassword(e)} secureTextEntry  />
      <TextInput style={styles.input} placeholder={"Confirm Password"} onChangeText={(e) => setConfirmPassword(e)}  secureTextEntry />

      <FilledButton
        title={"Register"}
        style={styles.loginButton}
        onPress={register}
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
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    right: 16,
  },

});
