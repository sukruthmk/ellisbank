import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TouchScreen from "./src/screens/TouchScreen";
import PinScreen from "./src/screens/PinScreen";
import HomeScreen from "./src/screens/HomeScreen";
import UserInfo from "./src/screens/UserInfoScreen";
import EditUserInfo from "./src/screens/EditUserInfo";

export default function App() {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="UserInfo" component={UserInfo} />
        <AppStack.Screen name="EditUserInfo" component={EditUserInfo} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
