import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from 'plant-daddy/route';

import { Introduction, Login } from "~screens";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}
      initialRouteName="Introduction"
    >
      <Screen name="Introduction" component={Introduction} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
