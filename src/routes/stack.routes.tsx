import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from 'plant-daddy/route';

import { Introduction, Login, Signup } from '~screens';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}
      initialRouteName="Signup"
    >
      <Screen name="Introduction" component={Introduction} />
      <Screen name="Login" component={Login} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
}
