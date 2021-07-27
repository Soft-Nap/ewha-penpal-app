import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Find from '../screens/Find';
import FindDetail from '../screens/FindDetail';
import Send from '../screens/Send';
import SendCheck from '../screens/SendCheck';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const FindStack = ({navigation, route}) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "FindDetail" || routeName === "Send" || routeName === "SendCheck") {
          navigation.setOptions({ tabBarVisible: false });
        } else {
          navigation.setOptions({ tabBarVisible: true });
        }
      }, [navigation, route]);

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
                options={{ headerTitle: '프로필' }}
                
            />
            <Stack.Screen 
                name="Send" 
                component={Send} 
                options={{ headerTitle: '편지 작성' }}
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