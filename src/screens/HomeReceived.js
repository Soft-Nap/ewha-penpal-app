import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { colors } from "../Theme";
import LetterCard from "../components/LetterCard";

const letters = [];
for (let i = 0; i < 10; i++) {
  letters.push({
    id: i,
    username: i,
    date: i * 1000,
    content: "blahblah",
    letterType: "yellow",
  });
}

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
      <FlatList
        style={{ marginTop: 20, padding: 50 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        data={letters}
        renderItem={({ item }) => <LetterCard letter={item} />}
        keyExtractor={(letter) => letter["id"].toString()}
      ></FlatList>
    </SafeAreaView>
  );
};

export default HomeReceived;
