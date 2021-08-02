import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors, fontSizes } from "../Theme";
import Stamp from "./Stamp";

const LetterCard = ({
  letter: { id, username, date, content, letterType },
  onPress,
}) => {
  const getStyle = () => {
    // 편지지 종류에 따라 다른 스타일 리턴
    if (letterType === "yellow") {
      return styles.yellow;
    } else if (letterType === "basic") {
      return styles.basic;
    } else {
      return styles.pink;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        width: 275,
        height: 160,
        marginBottom: 40,
      }}
    >
      <View style={getStyle()}>
        <View
          style={{
            width: 255,
            height: 140,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 15,
            padding: 10,
            backgroundColor: colors.beige,
          }}
        >
          {/* 우표 */}
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              marginBottom: 2,
            }}
          >
            <Text style={{ flex: 2, paddingRight: 20 }}>{content}</Text>
            <Stamp />
          </View>
          {/* 사용자 정보 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: colors.pink,
                borderRadius: 100 / 2,
                borderColor: "black",
                borderWidth: 1,
                marginRight: 10,
              }}
            ></View>
            <View style={{ width: "90%" }}>
              <Text style={{ fontSize: fontSizes.base, marginBottom: 4 }}>
                {username}
              </Text>
              <Text style={{ fontSize: fontSizes.small }}>{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  yellow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 275,
    height: 160,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    padding: 20,
    backgroundColor: colors.yellow,
  },
  basic: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 275,
    height: 160,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    padding: 20,
    backgroundColor: colors.grey,
  },
  pink: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 275,
    height: 160,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    padding: 20,
    backgroundColor: colors.pink,
  },
});

export default LetterCard;
