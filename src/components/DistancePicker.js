import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, fontSizes } from "../Theme";

let index = 0;
const distance = [
  { label: "멀리까지", value: "멀리까지" },
  { label: "조금 멀리까지", value: "조금 멀리까지" },
  { label: "가까이", value: "가까이" },
];

const DistancePicker = () => {
  const pickerRef = useRef();
  const [value, setValue] = useState();
  const [prov, setProv] = useState();

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialCommunityIcons
        name="waves"
        size={18}
        color="black"
        style={{ marginRight: 4 }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => pickerRef.current.show()}
      >
        <Text style={{ fontSize: fontSizes.base, color: colors.black }}>
          {prov ? prov : "선호 거리"}
        </Text>
      </TouchableOpacity>
      <ReactNativePickerModule
        pickerRef={pickerRef}
        value={value}
        title={"선호하는 거리를 선택해주세요."}
        items={distance}
        onValueChange={(value) => {
          setProv(value);
          setValue(value);
        }}
      />
    </View>
  );
};

export default DistancePicker;
