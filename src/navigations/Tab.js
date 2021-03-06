import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import { colors } from "../Theme";
import MoreStack from "./MoreStack";
import HomeStack from "./HomeStack";
import ListStack from "./ListStack";
import FindStack from "./FindStack";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color, source }) => {
  return source === "ionicons" ? (
    <Ionicons name={name} size={size} color={color} />
  ) : (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "black",
        inactiveTintColor: colors.grey,
        style: {
          // position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: responsiveHeight(11),
          borderWidth: 1,
          borderTopWidth: 1,
          backgroundColor: "#F7F6F5",
          borderColor: "black",
          borderTopColor: "black",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "home" }),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStack}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "email-outline" }),
        }}
      />
      <Tab.Screen
        name="Find "
        component={FindStack}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "account-search" }),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          tabBarIcon: (props) =>
            TabIcon({ ...props, name: "reorder-three", source: "ionicons" }),
        }}
      />
      {/* ?????? ????????? ????????? ?????? ?????? */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
