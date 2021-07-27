import React, { useContext, useLayoutEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { colors, fontSizes } from "../Theme";

const channels = [];
for (let idx = 0; idx < 20; idx++) {
  channels.push({
    id: idx,
    title: `title ${idx}`,
    description: `description ${idx}`,
    createdAt: idx,
  });
}

const Item = ({ item: { id, title, description, createdAt }, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress({ id, title })}
      activeOpacity={0.8}
      style={{
        padding: 20,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.large,
            fontWeight: "bold",
            color: "black",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: fontSizes.base,
            color: "black",
          }}
        >
          {createdAt}
        </Text>
      </View>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

const MoreNotice = ({ navigation }) => {
  const _handleItemPress = (params) => {
    navigation.navigate("NoticeDetail", params);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      <FlatList
        keyExtractor={(item) => item["id"].toString()}
        data={channels}
        renderItem={({ item }) => (
          <Item item={item} onPress={_handleItemPress} />
        )}
        style={{ width: "100%" }}
        contentContainerStyle={{ justifyContent: "center" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
export default MoreNotice;
