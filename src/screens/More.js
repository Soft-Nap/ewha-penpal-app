import React from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import { colors, fontSizes } from "../Theme";
import { AntDesign } from "@expo/vector-icons";
import MoreButton from "../components/MoreButton";

const More = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      {/* 프로필 */}
      <View style={{ width: "90%", height: 235, marginBottom: 50 }}>
        <View style={styles.profileBackground}>
          <View style={styles.profileBackgroundInside}>
            {/* 프로필 사진 및 이름, 위치 */}
            <View
              style={{
                width: "90%",
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* 프로필 사진 컴포넌트 추가 필요 */}
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  backgroundColor: "black",
                  marginRight: 20,
                }}
              ></View>
              {/* 유저 닉네임, 위치 */}
              <View style={{ width: "65%" }}>
                <Text
                  style={{
                    fontSize: fontSizes.large,
                    color: "black",
                    fontWeight: "bold",
                    marginBottom: 5,
                  }}
                >
                  닉네임
                </Text>
                <Text style={{ fontSize: fontSizes.base, color: "black" }}>
                  주소
                </Text>
              </View>
              <AntDesign
                name="right"
                size={24}
                color="black"
                onPress={() => {
                  navigation.navigate("EditProfile");
                }}
              />
            </View>
            {/* 유저 소개 */}
            <View style={{ marginTop: 20, marginLeft: 20, width: "90%" }}>
              <Text>소개</Text>
            </View>
            {/* 태그 - 컴포넌트 추가 필요 */}
            <View style={{ width: "90%" }}></View>
          </View>
        </View>
      </View>
      {/* 기타 메뉴 리스트 */}
      <ScrollView style={{ width: "90%" }}>
        <MoreButton text="푸쉬 알림" isToggle />
        <MoreButton
          text="비밀번호 변경"
          onPress={() => {
            navigation.navigate("Password");
          }}
        />
        <MoreButton
          text="공지사항"
          onPress={() => {
            navigation.navigate("Notice");
          }}
        />
        <MoreButton text="로그아웃" onPress={() => console.log("Logout")} />
        <MoreButton
          text="회원 탈퇴"
          onPress={() => {
            navigation.navigate("DelAccount");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",

    height: 235,
    top: 20,
    backgroundColor: colors.green,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  profileBackgroundInside: {
    width: "95%",
    height: 215,
    backgroundColor: colors.beige,
    borderColor: "black",
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
  },
});

export default More;
