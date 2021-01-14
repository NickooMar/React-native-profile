import React, { useContext } from "react";
import {StyleSheet, Text, View } from "react-native";
import FilledButton from "../components/FilledButton";
import { Heading } from "../components/Heading";
import { myContext } from "../context/AuthContext";
import axios from "axios";


function Profile({ navigation }) {
  
  const ctx = useContext(myContext)

  console.log(ctx)

  const logout = () => {
    axios.get('http:10.0.2.2:4000/logout', {
      withCredentials: true,
    }).then((res) => {
      if(res.data === 'success'){
        navigation.navigate('Login');
      }
    })
  };


  return (
    <View style={styles.container}>
      <Heading style={styles.title}> Welcome {ctx.username} </Heading>
      <Text style={styles.title}> ID: {ctx.id} </Text>
      <FilledButton title={"Logout"} style={styles.logoutButton} onPress={logout} />
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
  logoutButton: {
    marginVertical: 20,
  }
});

export default Profile