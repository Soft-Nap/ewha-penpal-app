import React from "react";
import { Text } from "react-native";
import { fontSizes } from "../Theme";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";

const LocationPicker = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      fixAndroidTouchableBug = {true}
      items={[
        { label: "Football", value: "football" },
        { label: "Baseball", value: "baseball" },
        { label: "Hockey", value: "hockey" },
      ]}
    />
  );
};

export default LocationPicker;
