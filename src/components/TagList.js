import React, { useState } from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fontSizes } from "../Theme";
import Tag from "./Tag";

const interests = [
  "영화",
  "운동",
  "음악",
  "뮤지컬",
  "책",
  "게임",
  "학교생활",
  "음식",
  "패션",
  "술",
  "맛집",
  "진로",
  "공부",
  "스포츠",
  "연애",
  "덕질",
  "새내기",
  "취준",
  "여행",
  "사진",
];
const tags = [];
for (let idx = 0; idx < 20; idx++) {
  tags.push({
    id: idx,
    title: interests[idx],
    selected: false,
  });
}

const Item = ({ item: { id, title, selected }, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => !selected}
      activeOpacity={0.8}
      style={{
        marginHorizontal: RFValue(5, 812),
        marginVertical: RFValue(6, 812),
      }}
    >
      <Tag text={title} grey={selected ? false : true} />
    </TouchableOpacity>
  );
};

const TagList = () => {
  return (
    <FlatList
      keyExtractor={(item) => item["id"]}
      data={tags}
      renderItem={({ item }) => <Item item={item} />}
      style={{ width: responsiveWidth(80) }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
      numColumns={5}
    />
  );
};

export default TagList;
