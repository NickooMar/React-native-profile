import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/Login";
import { RegistrationScreen } from "../screens/RegistrationScreen";

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} mode={"modal"}>
      <AuthStack.Screen name={"Login"} component={LoginScreen} />
      <AuthStack.Screen name={"Register"} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}
