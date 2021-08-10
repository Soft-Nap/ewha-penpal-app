import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fontSizes } from "../Theme";

const EmptyStateScreen = ({ imageUri, title, description }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: RFValue(fontSizes.xlarge, 812),
          fontWeight: "bold",
          color: colors.black,
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: RFValue(fontSizes.large, 812),
          color: colors.black,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        {description}
      </Text>
      <Image
        source={imageUri}
        style={{
          width: responsiveWidth(80),
          height: responsiveWidth(80),
          marginBottom: responsiveHeight(15),
        }}
      />
    </SafeAreaView>
  );
};

export default EmptyStateScreen;
