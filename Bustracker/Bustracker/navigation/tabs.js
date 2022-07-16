import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Home, Notifications, Favs} from '../screens';
import {COLORS, SIZES} from '../constants/';

const Tab = createBottomTabNavigator();

Fontisto.loadFont();
MaterialIcons.loadFont();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <Fontisto
            name="map-marker-alt"
            size={SIZES.tabBarIcon}
            color={focused ? COLORS.blue : COLORS.gray}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Favs"
      component={Favs}
      options={{
        tabBarIcon: ({focused}) => (
          <MaterialIcons
            name="favorite"
            size={SIZES.tabBarIcon}
            color={focused ? COLORS.blue : COLORS.gray}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarIcon: ({focused}) => (
          <MaterialIcons
            name="notifications"
            size={SIZES.tabBarIcon}
            color={focused ? COLORS.blue : COLORS.gray}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
