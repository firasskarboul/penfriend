import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home'

const Stack = createStackNavigator();

export default function AuthStack() {

  return (
    <Stack.Navigator
      initialRouteName="AppHome"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="AppHome" component={Home} />
    </Stack.Navigator>
  );
}