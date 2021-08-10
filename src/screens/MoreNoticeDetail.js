import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { colors, fontSizes } from "../Theme";
import Line from "../components/Line";
import { RFValue } from "react-native-responsive-fontsize";

const MoreNoticeDetail = () => {
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
          marginBottom: RFValue(30, 812),
          padding: 20,
          paddingTop: 30,
          borderRadius: 15,
          borderColor: colors.black,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.xlarge,
            fontWeight: "bold",
            color: "black",
            paddingBottom: 3,
          }}
        >
          Title
        </Text>
        <Text
          style={{
            fontSize: fontSizes.base,
            color: "black",
            paddingBottom: 3,
          }}
        >
          Time
        </Text>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "black",
            marginTop: 10,
            marginBottom: 20,
          }}
        />
        <Text>Description</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreNoticeDetail;
