import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../Theme';
import List from '../screens/List';
import Item from '../screens/ListItem';
import Mail from '../screens/ListMail';
import Temp from '../screens/ListTemp';
import Send from '../screens/Send';
import SendCheck from '../screens/SendCheck';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();
 
const ListStack = ({navigation, route}) => {
    
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "List") {
          navigation.setOptions({ tabBarVisible: true });
        } else {
          navigation.setOptions({ tabBarVisible: false });
        }
      }, [navigation, route]);

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
            <Stack.Screen 
                name="Send" 
                component={Send} 
                options={{ headerTitle: '편지 발송' }}
            />
            <Stack.Screen 
                name="SendCheck" 
                component={SendCheck} 
                options={{ headerTitle: '편지 발송 완료!', headerBackTitleVisible: false }}
            />
            
        </Stack.Navigator>
    );
};

export default ListStack;