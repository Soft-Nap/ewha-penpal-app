import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { fontSizes, colors } from '../Theme';

const LoginButton = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
            style={{
                backgroundColor: colors.green,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderColor: 'black',
                borderWidth: 1,
                padding: 20,
            }}
        >
            <Text 
                style={{
                    fontSize: fontSizes.base,
                }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};

export default LoginButton;