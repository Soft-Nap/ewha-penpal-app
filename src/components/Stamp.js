import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { colors } from '../Theme';

const Stamp = (props) => {
    return (
      <Image
      style={{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: colors.black,
        marginRight: 5,
        backgroundColor: colors.green,
      }}
      source= {props.imageUri}
    />
    );
  };

export default Stamp;