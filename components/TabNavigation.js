import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParentHome } from '../screens/parentZone/parentHome';
import { SearchKids } from '../screens/parentZone/searchKids';
import { AddKid } from '../screens/parentZone/addKid';
import { Requests } from '../screens/parentZone/requests';
import { SuggestKids } from '../screens/parentZone/suggestKids';

const Tab = createBottomTabNavigator();

const CustomTabBarAddButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress} style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}>
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#0149a8'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#00FFFF',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={ParentHome} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
                        <Image source={require('../assets/images/tabIcons/home1.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#0149a8' : 'rgba(19, 15, 64, 0.6)'
                            }}
                        />
                        <Text style={{ color: focused ? '#0149a8' : 'rgba(19, 15, 64, 0.6)', fontSize: 12, paddingTop: 5 }}>HOME</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Search" component={SearchKids} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
                        <Image source={require('../assets/images/tabIcons/search2.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#0149a8' : 'rgba(19, 15, 64, 0.6)'
                            }}
                        />
                        <Text style={{ color: focused ? '#0149a8' : 'rgba(19, 15, 64, 0.6)', fontSize: 12, paddingTop: 5 }}>Search</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Add Kid" component={AddKid}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/images/tabIcons/add.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: '#fff'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarAddButton {...props} />
                    )
                }}
            />

            <Tab.Screen name="Friend Requests" component={Requests} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
                        <Image source={require('../assets/images/tabIcons/demande1.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#0149a8' : 'rgba(19, 15, 64, 0.6)'
                            }}
                        />
                        <Text style={{ color: focused ? null : 'rgba(19, 15, 64, 0.6)', fontSize: 12, paddingTop: 5 }}>Requests</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Suggestions" component={SuggestKids} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
                        <Image source={require('../assets/images/tabIcons/suggestion.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#0149a8' : 'rgba(19, 15, 64, 0.6)'
                            }}
                        />
                        <Text style={{ color: focused ? '#0149a8' : 'rgba(19, 15, 64, 0.6)', fontSize: 12, paddingTop: 5 }}>Suggests</Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;