import React from 'react';
import { View } from 'react-native';
import { colors } from '../Theme';

const Line = () => {
    return (
        <View style={{
            width: '100%',
            borderBottomColor: colors.grey,
            borderBottomWidth: 1,
            marginVertical: 30,
        }}>
        </View>
    );
};

export default Line;