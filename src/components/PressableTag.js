import React, { useState } from 'react';
import { render } from 'react-dom';
import { Pressable, Text } from 'react-native';
import { colors } from '../Theme';


const PressableTag = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Pressable
      onPress = {() => setIsSelected(!isSelected)}
      style={{
        width: 44,
        height: 22,
        alignItems: 'center',
        marginRight: 5,
        backgroundColor: isSelected ? colors.pink : colors.grey,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.black,
      }}
    >
        <Text>{props.text}</Text>
    </Pressable>
    );
  };

export default PressableTag;