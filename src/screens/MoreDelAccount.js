import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { colors, fontSizes } from "../Theme";

import MyButton from "../components/MyButton";

const MoreDelAccount = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          height: "75%",
          marginTop: 50,
          padding: 20,
          paddingTop: 30,
          backgroundColor: colors.beige,
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.xlarge,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          제목
        </Text>
        <Text>계정을 삭제하면 어쩌고저쩌고</Text>
      </View>
      <View style={{ width: "90%", position: "absolute", bottom: 50 }}>
        <Text style={{ marginBottom: 10 }}>정말 탈퇴하시겠어요?</Text>
        <MyButton text="탈퇴하기" />
      </View>
    </SafeAreaView>
  );
};

export default MoreDelAccount;
