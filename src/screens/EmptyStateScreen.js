import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
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
          fontSize: fontSizes.xlarge,
          fontWeight: "bold",
          color: colors.black,
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: fontSizes.large,
          color: colors.black,
          marginBottom: 50,
        }}
      >
        {description}
      </Text>
      <Image
        source={imageUri}
        style={{ width: 300, height: 300, marginBottom: 140 }}
      />
    </SafeAreaView>
  );
};

export default EmptyStateScreen;
