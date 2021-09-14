import React from "react";
import { SafeAreaView, Text } from "react-native";
import { colors, fontSizes } from "../Theme";

const HeaderButton = ({ onPress, title }) => {
  return (
    <SafeAreaView
      style={{
        marginRight: 15,
        backgroundColor: colors.pink,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderColor: colors.black,
        borderWidth: 1,
      }}
    >
      <Text
        onPress={onPress}
        style={{ color: colors.black, fontSize: fontSizes.base }}
      >
        {title}
      </Text>
    </SafeAreaView>
  );
};

export default HeaderButton;
