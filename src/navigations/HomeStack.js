import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import HomeReceived from '../screens/HomeReceived';
import HomeSending from '../screens/HomeSending';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="오는 편지" component={HomeReceived} />
            <Stack.Screen name="가는 편지" component={HomeSending} />
        </Stack.Navigator>
    );
};

export default HomeStack;