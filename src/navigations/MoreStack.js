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
import MoreSelectProfile from "../screens/MoreSelectProfile";
import MoreEditTag from "../screens/MoreEditTag";

import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

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
    "EditTag",
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
        options={{ headerTitle: "?????????" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={MoreEditProfile}
        options={{ headerTitle: "??? ?????????" }}
      />
      <Stack.Screen
        name="SelectProfile"
        component={MoreSelectProfile}
        options={{ headerTitle: "????????? ??????" }}
      />
      <Stack.Screen
        name="EditIntro"
        component={MoreEditIntro}
        options={{ headerTitle: "???????????? ??????" }}
      />
      <Stack.Screen
        name="EditTag"
        component={MoreEditTag}
        options={{ headerTitle: "????????? ??????" }}
      />

      <Stack.Screen
        name="Password"
        component={MorePassword}
        options={{ headerTitle: "???????????? ??????" }}
      />
      <Stack.Screen
        name="Notice"
        component={MoreNotice}
        options={{ headerTitle: "????????????" }}
      />
      <Stack.Screen
        name="NoticeDetail"
        component={MoreNoticeDetail}
        options={{ headerTitle: "" }}
      />

      <Stack.Screen
        name="DelAccount"
        component={MoreDelAccount}
        options={{ headerTitle: "?????? ??????" }}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
