import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Chat } from '../screens/kidZone/profileKids/Chat';
import Discussion from '../screens/kidZone/profileKids/communication/Discussion';

const Stack = createStackNavigator();

export default function ChatStack() {

    return (
        <Stack.Navigator
            initialRouteName="Chat"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Discussion" component={Discussion} />
        </Stack.Navigator>
    );
}