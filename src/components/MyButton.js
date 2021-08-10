import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { fontSizes, colors } from "../Theme";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      /*onPress 기능 추가*/
      onPress={props.onPress}
      style={{
        backgroundColor: colors.green,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        padding: responsiveWidth(5),
      }}
    >
      <Text
        style={{
          fontSize: fontSizes.base,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
