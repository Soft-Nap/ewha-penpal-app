import React from "react";
import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../Theme";

const Tag = (props) => {
  return (
    <View
      style={{
        padding: RFValue(5, 812),
        minWidth: RFValue(44, 812),
        minHeight: RFValue(22, 812),
        alignItems: "center",
        marginRight: RFValue(5, 812),
        backgroundColor: props.grey ? colors.tagGrey : colors.pink,
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
