import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { colors } from "../Theme";
import LetterCard from "../components/LetterCard";

const HomeReceived = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* We need to add scrollview */}
      <LetterCard letterType="yellow" />
      <LetterCard letterType="pink" />
      <LetterCard letterType="basic" />
    </SafeAreaView>
  );
};

export default HomeReceived;
