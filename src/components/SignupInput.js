import React, { useState, forwardRef } from "react";
import { colors, fontSizes } from "../Theme";
import { View, TextInput, Text } from "react-native";
import PropTypes from "prop-types";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const SignupInput = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      isPassword,
      returnKeyType,
      maxLength,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <TextInput
        ref={ref}
        style={{
          flex: isPassword ? 0 : 2,
          backgroundColor: isFocused ? colors.beige : colors.white,
          borderRadius: 15,
          borderColor: "black",
          borderWidth: 1,
          padding: responsiveWidth(4.5),
          marginBottom: responsiveWidth(4),
          height: responsiveWidth(14),
        }}
        placeholderTextColor={colors.grey}
        isFocused={isFocused}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        returnKeyType={returnKeyType}
        maxLength={maxLength}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="none" // ios Only
        underlineColorAndroid="transparent" // Android only
      />
    );
  }
);

SignupInput.defaultProps = {
  onBlur: () => {},
};

SignupInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  returnKeyType: PropTypes.oneOf(["done", "next"]),
  maxLength: PropTypes.number,
};

export default SignupInput;
