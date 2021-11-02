import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileHome } from '../screens/kidZone/profileHome';
import { AddPost } from '../screens/kidZone/profileKids/addPost';
import ChatStack from '../components/ChatStack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const CustomTabBarAddButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress} style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 88,
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

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)

    if (routeName === 'Discussion') {
        return false;
    }
    return true;
};

const KidsTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#00FFFF',
                    borderRadius: 15,
                    height: 85,
                    ...styles.shadow
                },
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen name="Profile Home" component={ProfileHome} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/tabIcons/home1.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? '#0F28AD' : 'rgba(19, 15, 64, 0.6)'
                            }}
                        />
                        <Text style={{ color: focused ? '#000' : 'rgba(19, 15, 64, 0.6)', fontSize: 12, paddingTop: 5 }}>HOME</Text>
                    </View>
                ),
                header: () => null
            }} />

            <Tab.Screen name="Add Post" component={AddPost}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/images/tabIcons/add.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: '#fff'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarAddButton {...props} />
                    ),
                    header: () => null
                }}
            />

            <Tab.Screen name="Chat" component={ChatStack} options={({ route }) => (
                !getTabBarVisibility(route) ? {
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={focused ? require('../assets/images/tabIcons/chat1.png') : require('../assets/images/tabIcons/chat2.png')}
                                resizeMode={'contain'}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                            <Text style={{ fontSize: 12, paddingTop: 5 }}>Chat</Text>
                        </View>
                    ),

                    tabBarStyle: { display: 'none' },
                    header: () => null
                }
                    : {
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={focused ? require('../assets/images/tabIcons/chat1.png') : require('../assets/images/tabIcons/chat2.png')}
                                    resizeMode={'contain'}
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                                <Text style={{ fontSize: 12, paddingTop: 5 }}>Chat</Text>
                            </View>
                        ),
                        header: () => null
                    }
            )} />
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

export default KidsTabs;