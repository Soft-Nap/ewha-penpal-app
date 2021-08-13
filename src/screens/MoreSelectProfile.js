import React from "react";
import { SafeAreaView, View, ImageBackground } from "react-native";
import { colors, fontSizes } from "../Theme";
import Profile from "../components/Profile";
import { RFValue } from "react-native-responsive-fontsize";
import { Images } from "../images/Images";
import Line from "../components/Line";

const MoreSelectProfile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      <View style={{ paddingTop: 30 }}>
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
          <Profile size={RFValue(160, 812)} imageUri={Images.Bear.uri} />
        </ImageBackground>
      </View>
      <View style={{ width: "90%", marginTop: RFValue(10, 812) }}>
        <Line />
      </View>
    </SafeAreaView>
  );
};

export default MoreSelectProfile;
