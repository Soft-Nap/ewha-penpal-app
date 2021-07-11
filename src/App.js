import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigation from './navigations/Tab';
import HomeStack from './navigations/HomeStack';

const App = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}

export default App;
