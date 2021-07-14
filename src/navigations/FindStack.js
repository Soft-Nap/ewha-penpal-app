import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Find from '../screens/Find';
import FindDetail from '../screens/FindDetail';
import Send from '../screens/Send';
import SendCheck from '../screens/SendCheck';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

const FindStack = () => {
    return (
        <Stack.Navigator
            initialRouteName = "Find"
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
                name="Find" 
                component={Find} 
                options={{ headerTitle: '친구 찾기' }}
            />
            <Stack.Screen 
                name="FindDetail" 
                component={FindDetail}  
                options={{ headerTitle: '친구 찾기 자세히' }}
                
            />
            <Stack.Screen 
                name="Send" 
                component={Send} 
                options={{ headerTitle: '편지 발송' }}
            />
            <Stack.Screen 
                name="SendCheck" 
                component={SendCheck} 
                options={{ headerTitle: '편지 발송 완료!' }}
            />
        </Stack.Navigator>
    );
};

export default FindStack;