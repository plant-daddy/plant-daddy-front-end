import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from 'plant-daddy/route';

import { Introduction, Login, Signup } from '~screens';
import { TabRoutes } from './tab.routes';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}
      initialRouteName="Home"
    >
      <Screen name="Introduction" component={Introduction} />
      <Screen name="Login" component={Login} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Home" component={TabRoutes} />
    </Navigator>
  );
}
