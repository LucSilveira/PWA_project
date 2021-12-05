import React from 'react'
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

import Main from './pages/Main'
import Camera from './pages/Camera'

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ tabBarIcon : ({ color }) => <Feather name='home' sizw={20}  color={color}/>}} name="Main" component={Main} />
        <Tab.Screen options={{ tabBarIcon : ({ color }) => <Feather name='camera' sizw={20}  color={color}/>}} name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}