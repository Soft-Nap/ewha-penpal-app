import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { fontSizes, colors } from "../Theme";
import { AntDesign } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

/* 더보기 메뉴 리스트 버튼 */
const MoreButton = (props) => {
  const [isOnToggle, setIsOnToggle] = useState(false);
  const onToggle = () => setIsOnToggle((previousState) => !previousState);
  const arrow = (
    <AntDesign name="right" size={24} color="black" style={{ left: 10 }} />
  );
  const toggle = (
    <ToggleSwitch
      isOn={isOnToggle}
      onToggle={(isOnToggle) => {
        onToggle();
        // 알림 끄는 기능 필요
      }}
      size="small"
      onColor={colors.green}
      offColor={colors.grey}
      style={{ left: 10 }}
    />
  );

  return (
    <TouchableOpacity
      activeOpacity={props.isToggle ? 1.0 : 0.8}
      onPress={props.onPress}
      style={{
        backgroundColor: colors.beige,
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        paddingVertical: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(6),
        marginBottom: responsiveHeight(1.6),
      }}
    >
      <Text
        style={{
          flex: 2,
          fontSize: fontSizes.base,
        }}
      >
        {props.text}
      </Text>
      {props.isToggle ? toggle : arrow}
    </TouchableOpacity>
  );
};

export default MoreButton;
