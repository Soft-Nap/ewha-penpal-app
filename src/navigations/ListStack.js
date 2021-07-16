import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../Theme';
import List from '../screens/List';
import Item from '../screens/ListItem';
import Mail from '../screens/ListMail';
import Temp from '../screens/ListTemp';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

const ListStack = () => {
    return (
        <Stack.Navigator
            initialRouteName = "List"
            screenOptions={{
                cardStyle: {backgroundColor: '#ffffff'},
                headerStyle: {
                    backgroundColor: '#ffffff',
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
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen 
                name="List" 
                component={List} 
                options={{ headerTitle: '편지 목록' }}
            />
            <Stack.Screen 
                name="Item" 
                component={Item}  
                options={{ headerTitle: '주고받은 편지 목록' }}
                
            />
            <Stack.Screen 
                name="Mail" 
                component={Mail} 
                options={{ headerTitle: '편지' }}
            />
            <Stack.Screen 
                name="Temp" 
                component={Temp} 
                options={{ headerTitle: '임시 저장함' }}
            />
        </Stack.Navigator>
    );
};

export default ListStack;