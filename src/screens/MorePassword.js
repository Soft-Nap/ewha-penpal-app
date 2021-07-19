import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { colors, fontSizes } from "../Theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { removeWhitespace } from "../utils/common";
import SignupInput from "../components/SignupInput";
import SignupButton from "../components/SignupButton";

const MorePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfAgain, setPasswordConfAgain] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const passwordConfAgainRef = useRef();

  useEffect(() => {
    let _errorMessage = "";
    if (password !== "user password") {
      // 수정 필요
      _errorMessage = "비밀번호를 정확히 입력해주세요.";
    } else if (passwordConfirm !== passwordConfAgain) {
      _errorMessage = "새 비밀번호를 정확히 입력해주세요.";
    } else if (passwordConfirm.length < 6) {
      _errorMessage = "비밀번호는 6글자 이상으로 설정해주세요.";
    } else {
      _errorMessage = "";
    }
    setErrorMessage(_errorMessage);
  }, [password, passwordConfirm, passwordConfAgain]);

  useEffect(() => {
    setDisabled(
      !(password && passwordConfirm && passwordConfAgain && !errorMessage)
    );
  }, [password, passwordConfirm && passwordConfAgain && errorMessage]);

  const _handleSignupButtonPress = () => {};

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
      scrollEnabled={false}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: "center",
        }}
      >
        {/* 기존 비밀번호 */}
        <View style={{ width: "90%", marginTop: 20 }}>
          <Text style={styles.label}>기존 비밀번호</Text>
          <SignupInput
            ref={passwordRef}
            value={password}
            onChangeText={(text) => setPassword(removeWhitespace(text))}
            onSubmitEditing={() => passwordConfirmRef.current.focus()}
            returnKeyType="next"
            isPassword
          />
        </View>

        {/* 새 비밀번호 */}
        <View style={{ width: "90%" }}>
          <Text style={styles.label}>새 비밀번호</Text>
          <SignupInput
            ref={passwordConfirmRef}
            value={passwordConfirm}
            onChangeText={(text) => setPasswordConfirm(removeWhitespace(text))}
            onSubmitEditing={() => passwordConfAgain.current.focus()}
            returnKeyType="next"
            isPassword
          />
        </View>

        {/* 새 비밀번호 확인 */}
        <View style={{ width: "90%" }}>
          <Text style={styles.label}>새 비밀번호 확인</Text>
          <SignupInput
            ref={passwordConfAgainRef}
            value={passwordConfAgain}
            onChangeText={(text) =>
              setPasswordConfAgain(removeWhitespace(text))
            }
            returnKeyType="done"
            isPassword
          />
        </View>

        {/* 변경 버튼 및 오류 메시지 */}
        <View style={{ width: "90%", position: "absolute", bottom: 50 }}>
          <SignupButton
            title="변경하기"
            onPress={_handleSignupButtonPress}
            disabled={disabled}
          />
          <Text
            style={{
              alignItems: "flex-start",
              marginTop: 10,
              fontSize: fontSizes.base,
              color: colors.red,
            }}
          >
            {errorMessage}
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    width: "100%",
    marginBottom: 10,
    fontSize: fontSizes.base,
    color: "black",
  },
});

export default MorePassword;
