import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './home';

const Tab = createMaterialTopTabNavigator();

export default function Topnavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}