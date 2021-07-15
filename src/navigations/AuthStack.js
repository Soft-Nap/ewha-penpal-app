import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../Theme";

const Stack = createStackNavigator();

const AuthStack = () => {
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
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerTitle: "회원가입" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
