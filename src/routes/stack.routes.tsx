import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Carrousel } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}
    >
      <Screen name="Introduction" component={Carrousel} />
    </Navigator>
  );
}
