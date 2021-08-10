import React from "react";
import { View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../Theme";

const Line = () => {
  return (
    <View
      style={{
        width: "100%",
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        marginVertical: responsiveHeight(3.3),
      }}
    ></View>
  );
};

export default Line;
