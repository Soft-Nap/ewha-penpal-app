import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, View, ImageBackground } from "react-native";
import { colors, fontSizes } from "../Theme";
import Profile from "../components/Profile";
import { RFValue } from "react-native-responsive-fontsize";
import { Images } from "../images/Images";
import Line from "../components/Line";
import { TouchableOpacity } from "react-native";
import HeaderButton from "../components/HeaderButton";

const MoreSelectProfile = ({ navigation }) => {
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

  const [selProfile, setSelProfile] = useState(Images.Bear.uri); // 초기값은 유저가 현재 설정한 프로필
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      <View style={{ paddingTop: 30, width: "90%", alignItems: "center" }}>
        <ImageBackground
          style={{
            width: RFValue(180, 812),
            height: RFValue(180, 812),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.green,
            borderRadius: 90,
            borderWidth: 1,
          }}
        >
          <Profile size={RFValue(160, 812)} imageUri={selProfile} />
        </ImageBackground>
        <Line />
      </View>
      <View
        style={{
          width: "90%",
          marginTop: RFValue(10, 812),
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginHorizontal: RFValue(10, 812),
          }}
          onPress={() => {
            setSelProfile(Images.Bear.uri);
          }}
        >
          <Profile size={RFValue(80, 812)} imageUri={Images.Bear.uri} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginHorizontal: RFValue(10, 812),
          }}
          onPress={() => {
            setSelProfile(Images.Penguin.uri);
          }}
        >
          <Profile size={RFValue(80, 812)} imageUri={Images.Penguin.uri} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginHorizontal: RFValue(10, 812),
          }}
          onPress={() => {
            setSelProfile(Images.Pig.uri);
          }}
        >
          <Profile size={RFValue(80, 812)} imageUri={Images.Pig.uri} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginHorizontal: RFValue(10, 812),
          }}
          onPress={() => {
            setSelProfile(Images.Rabbit.uri);
          }}
        >
          <Profile size={RFValue(80, 812)} imageUri={Images.Rabbit.uri} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MoreSelectProfile;
