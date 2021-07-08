import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            {/* 이후 페이지 만들고 수정 필요 */}

        </Tab.Navigator>
    );
};

export default TabNavigation;