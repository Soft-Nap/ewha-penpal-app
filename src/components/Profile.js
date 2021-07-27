import React from 'react';
import { Image } from 'react-native';
import { colors } from '../Theme';

const Profile = (props) => {
    return (
      <Image
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size/2,
        borderWidth: 1,
        borderColor: colors.black,
        backgroundColor: colors.grey,
      }}
      source= {props.imageUri}
    />
    );
  };

export default Profile;