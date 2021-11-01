import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { KidsHome } from '../screens/kidZone/kidsHome'
import KidsTabs from './KidNavigation'

const Stack = createStackNavigator();

export default function KidStack() {

  return (
    <Stack.Navigator
      initialRouteName="Kids Home"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Kids Home" component={KidsHome} />
      <Stack.Screen name="Kid Navigation" component={KidsTabs} />
    </Stack.Navigator>
  );
}