import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../Theme';

const Tag = (props) => {
    return (
      <View
      style={{
        width: 44,
        height: 22,
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 5,
        backgroundColor: colors.pink,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.black,
      }}
    >
        <Text>{props.text}</Text>
    </View>
    );
  };

export default Tag;