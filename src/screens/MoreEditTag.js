import React, { useLayoutEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { colors, fontSizes } from "../Theme";
import TagList from "../components/TagList";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderButton from "../components/HeaderButton";

// 관심사 선택 화면
// 태그 누르면 선택 되게
// 최대 3개만 선택
const MoreEditTag = ({ navigation }) => {
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
      <View style={{ width: "90%", marginTop: "3%" }}>
        <Text style={{ color: colors.black, fontSize: fontSizes.base }}>
          관심사를 선택해주세요. (최대 3개)
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          height: RFValue(200, 812),
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3%",
          padding: "3%",
          backgroundColor: colors.beige,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: colors.black,
        }}
      >
        <TagList />
      </View>
    </SafeAreaView>
  );
};

export default MoreEditTag;
