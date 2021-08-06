import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { fontSizes, colors } from "../Theme";

const Buttons = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      /*onPress 기능 추가*/
      onPress={props.onPress}
      style={{
        width: 55,
        height: 25,
        backgroundColor: props.isSend? colors.pink : colors.beige,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        marginRight: 10,
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

export default Buttons;
