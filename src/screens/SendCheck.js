import React from 'react';
import {View, Button} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const SendCheck = ({ navigation }) => {
    return (
            <View>
                <Button title ="Back to Home" onPress={() => navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{name: 'Home'}],
                    }),
                )}/>
            </View>
    );
};


export default SendCheck;