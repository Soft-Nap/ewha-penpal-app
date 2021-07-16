import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MyButton from "../components/MyButton";
import SignupInput from "../components/SignupInput";
import SignupButton from "../components/SignupButton";
import { colors, fontSizes } from "../Theme";
import { removeWhitespace, validateEmail } from "../utils/common";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selected, setSelected] = useState(false); // 약관 동의했는지 확인
  const [disabled, setDisabled] = useState(true);

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  useEffect(() => {
    let _errorMessage = "";
    if (!validateEmail(email)) {
      _errorMessage = "올바른 이메일 형식을 입력해주세요.";
    } else if (password.length < 6) {
      _errorMessage = "비밀번호는 6글자 이상으로 설정해주세요.";
    } else if (password !== passwordConfirm) {
      _errorMessage = "비밀번호를 정확히 입력해주세요.";
    } else {
      _errorMessage = "";
    }
    setErrorMessage(_errorMessage);
  }, [email, password, passwordConfirm]);

  useEffect(() => {
    setDisabled(
      !(email && password && passwordConfirm && !errorMessage && selected)
    );
  }, [email, password, passwordConfirm, errorMessage, selected]);

  const _handleSignupButtonPress = () => {};

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "90%" }}>
          {/* 이메일 */}
          <Text style={styles.label}>이메일 주소</Text>
          <View style={{ flexDirection: "row" }}>
            <SignupInput
              value={email}
              onChangeText={(text) => setEmail(removeWhitespace(text))}
              onSubmitEditing={() => passwordRef.current.focus()}
              placeholder="ewhain.net 계정만 이용 가능해요."
              returnKeyType="next"
            />
            {/* 인증 버튼 */}
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={} (버튼 누르면 인증 메일 전송)
              style={{
                backgroundColor: colors.pink,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                borderColor: "black",
                borderWidth: 1,
                padding: 20,
                height: 60,
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: fontSizes.base,
                }}
              >
                인증
              </Text>
            </TouchableOpacity>
          </View>

          {/* 비밀번호 */}
          <Text style={styles.label}>비밀번호</Text>
          <SignupInput
            ref={passwordRef}
            value={password}
            onChangeText={(text) => setPassword(removeWhitespace(text))}
            onSubmitEditing={() => passwordConfirmRef.current.focus()}
            placeholder="6자리 이상으로 입력해주세요."
            returnKeyType="done"
            isPassword
          />

          {/* 비밀번호 확인 */}
          <Text style={styles.label}>비밀번호 확인</Text>
          <SignupInput
            ref={passwordConfirmRef}
            value={passwordConfirm}
            onChangeText={(text) => setPasswordConfirm(removeWhitespace(text))}
            onSubmitEditing={_handleSignupButtonPress}
            placeholder="비밀번호를 한 번 더 입력해주세요."
            returnKeyType="done"
            isPassword
          />

          {/* 약관 */}
          <Text style={styles.label}>이용 약관</Text>
          <ScrollView style={styles.terms}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              iaculis, odio et malesuada tincidunt, mauris nibh aliquet nibh, in
              tempus magna massa non elit. Vivamus eget dui sed elit ullamcorper
              blandit non eu ligula. Ut sed elementum sapien. Vestibulum ipsum
              felis, consectetur et tincidunt ut, auctor sit amet risus. Vivamus
              scelerisque, lorem porttitor laoreet ullamcorper, felis elit
              faucibus ex, vitae porta neque lacus a augue. Ut sit amet
              fermentum risus. Vivamus nec lacus ac risus hendrerit euismod in
              eu metus. Sed nisi quam, pellentesque eu rutrum quis, molestie
              quis massa. Morbi imperdiet sed ligula varius euismod. Nulla
              egestas vitae tortor gravida ornare. Morbi accumsan eu enim et
              aliquet. In vehicula dictum nibh vitae fringilla. Etiam varius
              nunc id lorem condimentum fringilla. Proin fermentum odio in
              iaculis commodo. Pellentesque ac pellentesque dolor. Donec luctus,
              eros ut tincidunt porttitor, sapien sem condimentum lectus, vitae
              ornare dolor risus at ligula. Aenean euismod dui sit amet risus
              commodo pretium. Curabitur id quam congue, rhoncus nisl vitae,
              molestie tortor. Pellentesque placerat mi ut arcu dapibus, quis
              pharetra purus tincidunt. Pellentesque facilisis turpis vitae
              porttitor lacinia.
            </Text>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={selected ? styles.selected : styles.unselected}
              onPress={() => setSelected(!selected)}
            />
            <Text
              onPress={() => setSelected(!selected)}
              style={{ fontSize: fontSizes.base, color: "black" }}
            >
              이용 약관에 동의합니다.
            </Text>
          </View>

          <SignupButton
            title="가입하기"
            onPress={_handleSignupButtonPress}
            disabled={disabled}
          />

          {/* 오류 메시지 */}
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
  terms: {
    width: "100%",
    height: 225,
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
  },
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
    backgroundColor: colors.red,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    marginRight: 7,
  },
});

export default Signup;
