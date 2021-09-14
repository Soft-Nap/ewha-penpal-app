import React, { useLayoutEffect } from "react";
import { View, SafeAreaView, Text, TextInput, ScrollView } from "react-native";
import { colors, fontSizes } from "../Theme";
import HeaderButton from "../components/HeaderButton";
import { responsiveHeight } from "react-native-responsive-dimensions";

/* 자기소개 편집 */
const MoreEditIntro = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => {
            console.log("완료");
            navigation.goBack();
          }}
          title="완료"
        />
      ),
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{
          width: "90%",
          backgroundColor: colors.beige,
          marginTop: 10,
          marginBottom: 30,
          padding: 20,
          paddingTop: 30,
          borderRadius: 15,
          borderColor: colors.black,
          borderWidth: 1,
        }}
      >
        <TextInput>유저가 기존에 작성했던 자기소개 내용</TextInput>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreEditIntro;
