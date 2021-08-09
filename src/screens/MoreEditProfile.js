import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import LocationPicker from "../components/LocationPicker";
import { colors, fontSizes } from "../Theme";
import Line from "../components/Line";
import Subtitle from "../components/Subtitle";
import DistancePicker from "../components/DistancePicker";
import Profile from "../components/Profile";
import { Images } from "../images/Images";
import Dialog from "react-native-dialog";

const MoreEditProfile = ({ navigation }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{ width: "100%", paddingTop: 30, paddingBottom: 50 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* 유저 프로필 및 위치 */}
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              console.log("Change profile");
            }}
          >
            <ImageBackground
              style={{
                width: 180,
                height: 180,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.green,
                borderRadius: 90,
                borderWidth: 1,
              }}
            >
              <Profile size={160} imageUri={Images.Bear.uri} />
            </ImageBackground>
          </TouchableOpacity>
          {/* 닉네임 변경 Alert 창 */}
          <Dialog.Container visible={dialogVisible}>
            <Dialog.Title>닉네임 변경</Dialog.Title>
            <Dialog.Description>
              변경할 닉네임을 입력해주세요.
            </Dialog.Description>
            <Dialog.Input
              wrapperStyle={{ backgroundColor: colors.white, opacity: 20 }}
              maxLength={10}
            />
            <Dialog.Button
              label="취소"
              bold={true}
              onPress={() => {
                setDialogVisible(false);
              }}
            />
            <Dialog.Button
              label="변경"
              onPress={() => {
                console.log("닉네임 변경");
                setDialogVisible(false);
              }}
            />
          </Dialog.Container>
          <Text
            style={{
              fontSize: fontSizes.xlarge,
              color: colors.black,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
              marginBottom: 8,
            }}
            onPress={() => {
              setDialogVisible(true);
            }}
          >
            닉네임
          </Text>
          <LocationPicker />
          <DistancePicker />
        </View>

        {/* 관심사 */}
        <View style={{ width: "90%" }}>
          <Line />
          <Subtitle text="관심사" />
          <View style={{ minHeight: 235, marginBottom: "10%" }}>
            <View style={styles.boxBackgroundPink}>
              <View style={styles.boxBackgroundInside}></View>
            </View>
          </View>
        </View>

        {/* 자기소개 */}
        <View style={{ width: "90%" }}>
          <Line />
          <Subtitle text="자기소개" />
          <TouchableOpacity
            style={{ minHeight: 235, marginBottom: 50 }}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("EditIntro");
            }}
          >
            <View style={styles.boxBackground}>
              <View style={styles.boxBackgroundInside}>
                <Text
                  style={{ fontSize: fontSizes.base, color: colors.black }}
                  numberOfLines={11}
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

    minHeight: 235,
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

    minHeight: 235,
    top: 20,
    backgroundColor: colors.pink,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  boxBackgroundInside: {
    width: "96%",
    minHeight: "95%",
    backgroundColor: colors.beige,
    padding: 20,
    borderColor: "black",
    borderRadius: 15,
    borderWidth: 1,
  },
});

export default MoreEditProfile;
