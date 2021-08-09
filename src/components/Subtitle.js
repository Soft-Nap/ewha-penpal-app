import React from "react";
import { Text, StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { fontSizes } from "../Theme";

const Subtitle = (props) => {
  return (
    <Text style={[styles.text, props.bold && styles.boldText]}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.large,
    marginBottom: responsiveHeight(2.2),
  },
  boldText: {
    fontSize: fontSizes.large,
    fontWeight: "bold",
    marginBottom: responsiveHeight(2.2),
  },
});

export default Subtitle;
