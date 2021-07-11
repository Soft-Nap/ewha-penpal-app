import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { colors } from '../Theme';
import Home from '../screens/Home';
import LetterList from '../screens/LetterList';
import Find from '../screens/Find';
import More from '../screens/More';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color, source }) => {
    return (source === "ionicons" ? 
    <Ionicons name={name} size={size} color={color} /> :
    <MaterialCommunityIcons name={name} size={size} color={color} />);
};

const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'black',
                inactiveTintColor: colors.grey,
                style:{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: 100,
                    borderWidth: 1,
                    borderTopWidth: 1,
                    backgroundColor: '#F7F6F5',
                    borderColor: 'black',
                    borderTopColor: 'black',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                },
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStack} 
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name:"home"}),
                }}
            />
            <Tab.Screen 
                name="List" 
                component={LetterList} 
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name:"email-outline"}),
                }}
            />
            <Tab.Screen 
                name="Find" 
                component={Find} 
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name:"account-search"}),
                }}
            />
            <Tab.Screen 
                name="More" 
                component={More} 
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name:"reorder-three", source: "ionicons"}),
                }}
            />
            {/* 이후 페이지 만들고 수정 필요 */}

        </Tab.Navigator>
    );
};

export default TabNavigation;