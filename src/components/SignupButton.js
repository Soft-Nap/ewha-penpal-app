import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { fontSizes, colors } from "../Theme";
import PropTypes from "prop-types";

const SignupButton = ({ title, onPress, isFilled, disabled }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      isFilled={isFilled}
      disabled={disabled}
      style={{
        backgroundColor: isFilled ? colors.green : "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        padding: 20,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Text
        isFilled={isFilled}
        style={{
          fontSize: fontSizes.base,
          color: isFilled ? "black" : colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

SignupButton.defaultProps = {
  isFilled: true,
};

SignupButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isFilled: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SignupButton;
