import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
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
      <ScrollView
        style={{ marginTop: 20, padding: 50 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <LetterCard letterType="yellow" />
        <LetterCard letterType="pink" />
        <LetterCard letterType="pink" />
        <LetterCard letterType="yellow" />
        <LetterCard letterType="pink" />
        <LetterCard letterType="pink" />
        <LetterCard letterType="yellow" />
        <LetterCard letterType="pink" />
        <LetterCard letterType="pink" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeReceived;
