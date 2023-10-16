import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScren from './HomeScren';
import Lab7 from './Lab4/lab7';
import Lab8 from './Lab4/lab8';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScren}
        />
         <Stack.Screen
          name="Lab4"
          component={Lab7}
        />
        <Stack.Screen 
          name="Lab4_b2"
          component={Lab8}/>
            <Stack.Screen 
          name="Lab4_b3"
          component={lab4_b3}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
