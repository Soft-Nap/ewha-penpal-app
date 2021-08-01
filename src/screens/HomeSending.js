import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { colors } from "../Theme";
import LetterCard from "../components/LetterCard";

const HomeSending = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: true,
    });
  }, [navigation]);

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
        <LetterCard
          letterType="yellow"
          onPress={() => navigation.navigate("HomeMail")}
        />
        <LetterCard
          letterType="pink"
          onPress={() => navigation.navigate("HomeMail")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSending;
