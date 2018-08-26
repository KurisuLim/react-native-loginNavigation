import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator  } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Register from './screens/register';
import Login from './screens/login';
import Home from './screens/home';
import Profile from './screens/profile';



export const SignedOut = createStackNavigator({
            Register: {
                screen: Register,
                navigationOptions: {
                    title: null
                }
            },
            Login: {
                screen: Login,
                navigationOptions: {
                    title: null
                }
            }
        });

export const SignedIn = createBottomTabNavigator({
    Home:{
        screen: Home,
        navigationOption:{
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name={'home'} size={30} color={tintColor}/>
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOption: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name={'user'} size={30} color={tintColor}/>
            )
        }
    }
})

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut:{
                screen:SignedOut
            }
        },
        {
            initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
        }
    );
};