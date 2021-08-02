import React, { useLayoutEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { colors } from "../Theme";
import LetterCard from "../components/LetterCard";
import EmptyStateScreen from "./EmptyStateScreen";
import { Images } from "../images/Images";

const letters = [];
for (let i = 0; i < 0; i++) {
  letters.push({
    id: i,
    username: i,
    date: i * 1000,
    content: "blahblah",
    letterType: "yellow",
  });
}

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
      <FlatList
        style={{ marginTop: 20, padding: 50, width: "100%" }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        data={letters}
        renderItem={({ item }) => (
          <LetterCard
            onPress={() => {
              navigation.navigate("HomeMail");
            }}
            letter={item}
          />
        )}
        keyExtractor={(letter) => letter["id"].toString()}
        ListEmptyComponent={() => (
          <EmptyStateScreen
            imageUri={Images.HomeLetterEmpty.uri}
            title={"보내는 편지가 없어요."}
            description={"펜팔 친구 찾기로 새 친구에게 편지를 보내보세요."}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default HomeSending;
