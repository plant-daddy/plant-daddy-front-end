import React from 'react';
import { TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TabParamList } from 'plant-daddy/route';

import { Plants, Plant, Profile, Reminders, Settings } from '~screens';
import { theme } from '~global';
import { style } from './style';

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

const tabIcons = {
  Plants: 'home',
  Reminders: 'notifications',
  Plant: 'add',
  Profile: 'person',
  Settings: 'settings',
};

export function TabRoutes() {

  return (
    <Navigator
      initialRouteName="Plants"
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
      
            const currentRoute = tabIcons[route.name];
            const icon: any = focused ? currentRoute : `${currentRoute}-outline` ;
      
            return <Ionicons name={icon} size={size} color={color} />
          },
        })
      }
      tabBarOptions={{
        activeTintColor: theme.colors.lightGreen,
        inactiveTintColor: '#777',
        style: style.tabContainer,
        tabStyle: style.tab
      }}
    >
      <Screen name="Plants" component={Plants} />
      <Screen name="Reminders" component={Reminders} />
      <Screen
        name="Plant"
        component={Plant}
        options={{
          title: '',
          tabBarButton: (props) => (
            <TouchableHighlight
              style={style.plusIcon}
              activeOpacity={0.6}
              underlayColor={theme.colors.mediumGreen}
              onPress={props.onPress}
            >
              <Ionicons name={tabIcons.Plant as any} size={35} color='#fff' />
            </TouchableHighlight>
          ),
        }}
      />
      <Screen name="Profile" component={Profile} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}