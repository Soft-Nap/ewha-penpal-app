import React from "react";
import {Image, ImageBackground, Pressable } from "react-native";
import { colors } from "../Theme";
import {Images} from '../images/Images';

const Stamp = (props) => {
  return (
      <ImageBackground
      style = {{
        width: 60,
        height: 60,
        padding: 4.5,
        marginRight: 5,
      }}
      source= {Images.Stamp.uri}>
        <Image
      style={{
        width: 51,
        height: 51,
        borderWidth: 1,
        borderColor: colors.black,
        backgroundColor: colors.green,
      }}
      source={props.imageUri}
      />
      </ImageBackground>
      
    
  );
};

export default Stamp;
