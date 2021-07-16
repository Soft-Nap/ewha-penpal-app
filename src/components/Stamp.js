import React from "react";
import { View } from "react-native";
import { colors } from "../Theme";

const Stamp = () => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: colors.white,
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <View></View>
    </View>
  );
};

export default Stamp;
