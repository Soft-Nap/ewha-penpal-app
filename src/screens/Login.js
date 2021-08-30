import React, { useState, useRef, useEffect, useContext } from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import { colors, fontSizes } from "../Theme";
import Input from "../components/Input";
import LoginButton from "../components/LoginButton";
import { Images } from "../images/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { Alert } from "react-native";
import { login } from "../utils/firebase";

import { ProgressContext } from "../contexts";

const Login = ({ navigation }) => {
  // 처음 배우는 리액트 네이티브 책과 유사하게 작성됨
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { spinner } = useContext(ProgressContext);

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  // 이메일 공백 제거 및 오류 검사
  const _handleEmailChange = (email) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? "" : "올바르지 않은 이메일 형식이에요."
    );
  };

  // 비밀번호 공백 제거
  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespace(password));
  };

  const _handleLoginButtonPress = async () => {
    try {
      spinner.start();
      const user = await login({ email, password });
      Alert.alert("Login Success", user.email);
    } catch (e) {
      Alert.alert("Login Error", e.message);
    } finally {
      spinner.stop();
    }
  };

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
          justifyContent: "center",
        }}
      >
        {/* 로고 이미지 */}
        <Image
          style={{
            width: 250,
            height: 250,
            marginBottom: 30,
          }}
          source={Images.loginLogo.uri}
        />
        {/* 아이디, 비밀번호 input, 로그인 버튼 */}
        <View style={{ width: "90%" }}>
          <Input
            label="Email"
            value={email}
            onChangeText={_handleEmailChange}
            onSubmitEditing={() => passwordRef.current.focus()}
            placeholder="이메일"
            returnKeyType="next"
          />
          <Input
            ref={passwordRef}
            label="Password"
            value={password}
            onChangeText={_handlePasswordChange}
            onSubmitEditing={_handleLoginButtonPress}
            placeholder="비밀번호"
            returnKeyType="done"
            isPassword
          />
          <LoginButton
            title="로그인"
            onPress={_handleLoginButtonPress}
            disabled={disabled}
          />
        </View>

        {/* 회원가입 문구 */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginTop: 15,
              fontSize: fontSizes.base,
              color: "black",
            }}
          >
            아직 회원이 아니신가요?
          </Text>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 2,
              fontSize: fontSizes.base,
              color: colors.green,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("Signup")}
          >
            회원가입
          </Text>
        </View>

        {/* 이메일 오류 메시지 */}
        <View>
          <Text
            style={{
              alignItems: "flex-start",
              marginTop: 15,
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

export default Login;
