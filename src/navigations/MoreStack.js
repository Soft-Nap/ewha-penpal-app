import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../Theme";
import More from "../screens/More";
import MoreEditProfile from "../screens/MoreEditProfile";
import MorePassword from "../screens/MorePassword";
import MoreNotice from "../screens/MoreNotice";
import MoreDelAccount from "../screens/MoreDelAccount";
import MoreNoticeDetail from "../screens/MoreNoticeDetail";
import MoreEditIntro from "../screens/MoreEditIntro";

import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MoreSelectProfile from "../screens/MoreSelectProfile";

const Stack = createStackNavigator();

const MoreStack = ({ navigation, route }) => {
  const extraScreens = [
    "EditProfile",
    "Password",
    "Notice",
    "NoticeDetail",
    "DelAccount",
    "EditIntro",
    "SelectProfile",
  ];

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (extraScreens.includes(routeName)) {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: colors.white,
          shadowColor: "transparent",
        },
        headerBackTitleVisible: false,
        headerBackImage: () => {
          const style = {
            marginRight: 5,
            marginLeft: Platform.OS === "ios" ? 20 : 0,
          };
          return (
            <FontAwesome
              name="angle-left"
              size={30}
              color="black"
              style={style}
            />
          );
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="More"
        component={More}
        options={{ headerTitle: "더보기" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={MoreEditProfile}
        options={{ headerTitle: "내 프로필" }}
      />
      <Stack.Screen
        name="SelectProfile"
        component={MoreSelectProfile}
        options={{ headerTitle: "캐릭터 변경" }}
      />
      <Stack.Screen
        name="EditIntro"
        component={MoreEditIntro}
        options={{ headerTitle: "자기소개 편집" }}
      />

      <Stack.Screen
        name="Password"
        component={MorePassword}
        options={{ headerTitle: "비밀번호 변경" }}
      />
      <Stack.Screen
        name="Notice"
        component={MoreNotice}
        options={{ headerTitle: "공지사항" }}
      />
      <Stack.Screen
        name="NoticeDetail"
        component={MoreNoticeDetail}
        options={{ headerTitle: "" }}
      />

      <Stack.Screen
        name="DelAccount"
        component={MoreDelAccount}
        options={{ headerTitle: "회원 탈퇴" }}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
