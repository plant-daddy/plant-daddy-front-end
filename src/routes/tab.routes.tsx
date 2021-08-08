import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TabParamList } from 'plant-daddy/route';

import { Plants, Profile, Reminders, Settings } from '~screens';
import { theme } from '~global';

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

const tabIcons = {
  Plants: 'home',
  Reminders: 'notifications',
  Profile: 'person',
  Settings: 'settings',
};

export function TabRoutes() {

  return (
    <Navigator
      initialRouteName="Plants"
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
      
            const currentRoute = tabIcons[route.name];
            const icon: any = focused ? currentRoute : `${currentRoute}-outline` ;
      
            return <Ionicons name={icon} size={size} color={theme.colors.lightGreen} />
          },
          tabBarLabel: () => {
            return (
              <Text style={{ color: theme.colors.lightGreen }} >
                { route.name }
              </Text>
            );
          },
        })
      }
    >
      <Screen name="Plants" component={Plants} />
      <Screen name="Reminders" component={Reminders} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}