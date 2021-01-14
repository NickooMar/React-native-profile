import React, { useContext } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackNavigator } from "./src/navigators/AuthStackNavigator";
import { myContext } from "./src/context/AuthContext";
import Profile from "./src/screens/Profile";

const RootStack = createStackNavigator();

export default function Index() {
  const ctx = useContext(myContext);


  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode={"modal"}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />

        <RootStack.Screen name={"Profile"} component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
