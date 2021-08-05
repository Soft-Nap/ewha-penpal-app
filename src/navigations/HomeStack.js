import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../Theme";
import Home from "../screens/Home";
import HomeReceived from "../screens/HomeReceived";
import HomeSending from "../screens/HomeSending";
import HomeMail from "../screens/HomeMail";
import { Platform } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const LetterStack = createStackNavigator();

function LetterStackScreen() {
  return (
    <LetterStack.Navigator
      screenOptions={{ animationEnabled: "true" }}
      mode="modal"
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
      <LetterStack.Screen
        name="HomeSending"
        component={HomeSending}
        options={{ headerTitle: "가는 편지" }}
      />

      <LetterStack.Screen
        name="HomeMail"
        component={HomeMail}
        options={{
          // gestureEnabled: false,
          headerTitle: "",
          animationEnabled: true,
          headerBackImage: () => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === "ios" ? 15 : 0,
            };
            return (
              <Ionicons
                name="ios-close"
                size={24}
                color="black"
                style={style}
              />
            );
          },
        }}
      />
    </LetterStack.Navigator>
  );
}

const HomeStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "HomeReceived" || routeName === "LetterStack") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
    if (routeName === "HomeMail")
      navigation.setOptions({ gestureEnabled: false });
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
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeReceived"
        component={HomeReceived}
        options={{ headerTitle: "오는 편지" }}
      />

      <Stack.Screen
        name="LetterStack"
        component={LetterStackScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HomeMail"
        component={HomeMail}
        options={{
          headerTitle: "",
          animationEnabled: true,
          headerBackImage: () => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === "ios" ? 15 : 0,
            };
            return (
              <Ionicons
                name="ios-close"
                size={24}
                color="black"
                style={style}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
