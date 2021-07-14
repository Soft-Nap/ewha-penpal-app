import React from 'react';
import { colors, fontSizes } from '../Theme';
import { View, TextInput } from 'react-native';

const Input = () => {
    return (
        <TextInput
            style={{
                backgroundColor: colors.white,
                borderRadius: 50,
                borderColor: 'black',
                borderWidth: 1,
                padding: 20,
                marginBottom: 15,
            }}
        />
    );
};

export default Input;