import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const SignupRadioButton = () => {
  return <TouchableOpacity activeOpacity={1} style={styles.unselected} />;
};

const styles = StyleSheet.create({
  unselected: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    marginRight: 7,
  },
  selected: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    marginRight: 7,
  },
});
export default SignupRadioButton;
