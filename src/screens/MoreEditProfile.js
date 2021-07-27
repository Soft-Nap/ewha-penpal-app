import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import LocationPicker from "../components/LocationPicker";
import { colors, fontSizes } from "../Theme";
import Line from "../components/Line";
import Subtitle from "../components/Subtitle";

const MoreEditProfile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      {/* 유저 프로필 및 위치 */}
      <View>
        {/* 프로필 사진 추가 필요 */}
        <LocationPicker />
      </View>

      {/* 관심사 */}
      <View style={{ width: "90%" }}>
        <Line />
        <Subtitle text="관심사" />
        <View style={{ height: 235, marginBottom: 50 }}>
          <View style={styles.boxBackgroundPink}>
            <View style={styles.boxBackgroundInside}></View>
          </View>
        </View>
      </View>

      {/* 자기소개 */}
      <View style={{ width: "90%" }}>
        <Line />
        <Subtitle text="자기소개" />
        <View style={{ height: 235, marginBottom: 50 }}>
          <View style={styles.boxBackground}>
            <View style={styles.boxBackgroundInside}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxBackground: {
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
  boxBackgroundPink: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",

    height: 235,
    top: 20,
    backgroundColor: colors.pink,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  boxBackgroundInside: {
    width: "96%",
    height: "95%",
    backgroundColor: colors.beige,
    borderColor: "black",
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
  },
});

export default MoreEditProfile;
