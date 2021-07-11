import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../Theme';
import Home from '../screens/Home';
import HomeReceived from '../screens/HomeReceived';
import HomeSending from '../screens/HomeSending';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: {
                    backgroundColor: colors.white,
                    shadowColor: 'transparent',
                },
                headerBackTitleVisible: false,
                headerBackImage: () => {
                    const style = {
                        marginRight: 5,
                        marginLeft: Platform.OS === 'ios' ? 20 : 0,
                    };
                    return (
                        <FontAwesome name="angle-left" size={30} color="black" style={style}/>
                    );
                },
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="HomeReceived" 
                component={HomeReceived}  
                options={{ headerTitle: '오는 편지' }}
                
            />
            <Stack.Screen 
                name="HomeSending" 
                component={HomeSending} 
                options={{ headerTitle: '가는 편지' }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;