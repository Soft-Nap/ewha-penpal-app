import React from "react";
import { SafeAreaView, View, Button, Image } from "react-native";
import Subtitle from "../components/Subtitle";
import { CommonActions } from "@react-navigation/native";
import { colors } from "../Theme";
import MyButton from "../components/MyButton";
import { Images } from "../images/Images";
import constants from "../utils/constants";

const SendCheck = ({ navigation }) => {
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
          height: constants.height / 2,
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Subtitle text="00님에게 편지를 나르는 중..." bold="true" />
        <Subtitle text="남은 시간: " />
        {/*이미지 추가 필요*/}
        <Image
          style={{
            width: constants.width / 2,
            height: constants.height / 3,
          }}
          source={Images.Sending.uri}
        />
      </View>
      <View style={{ width: "90%" }}>
        {/*스택 초기화 후 홈화면으로 이동, 뒤로가기 안됨*/}
        <MyButton
          text="Home"
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: "Home" }],
              })
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SendCheck;
