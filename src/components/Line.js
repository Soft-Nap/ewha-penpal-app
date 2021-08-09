import React from "react";
import { View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { colors } from "../Theme";

const Line = () => {
  return (
    <View
      style={{
        width: "100%",
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        marginVertical: responsiveHeight(3.2),
      }}
    ></View>
  );
};

export default Line;
