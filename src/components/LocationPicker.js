import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, fontSizes } from "../Theme";

let index = 0;
const province = [
  { label: "서울", value: "서울" },
  { label: "경기/인천", value: "경기" },
  { label: "강원", value: "강원" },
  { label: "대전/충남", value: "충남" },
  { label: "세종/충북", value: "충북" },
  { label: "광주/전남", value: "전남" },
  { label: "전북", value: "전북" },
  { label: "대구/경북", value: "경북" },
  { label: "부산/경남", value: "경남" },
  { label: "제주", value: "제주" },
];

const seoul = [
  { label: "강남구", value: "강남구" },
  { label: "강동구", value: "강동구" },
  { label: "강북구", value: "강북구" },
  { label: "강서구", value: "강서구" },
  { label: "관악구", value: "관악구" },
  { label: "광진구", value: "광진구" },
  { label: "구로구", value: "구로구" },
  { label: "금천구", value: "금천구" },
  { label: "노원구", value: "노원구" },
  { label: "도봉구", value: "도봉구" },
  { label: "동대문구", value: "동대문구" },
  { label: "동작구", value: "동작구" },
  { label: "마포구", value: "마포구" },
  { label: "서대문구", value: "서대문구" },
  { label: "서초구", value: "서초구" },
  { label: "성동구", value: "성동구" },
  { label: "성북구", value: "성북구" },
  { label: "송파구", value: "송파구" },
  { label: "양천구", value: "양천구" },
  { label: "영등포구", value: "영등포구" },
  { label: "용산구", value: "용산구" },
  { label: "은평구", value: "은평구" },
  { label: "종로구", value: "종로구" },
  { label: "중구", value: "중구" },
  { label: "중랑구", value: "중랑구" },
];

const gyeonggi = [
  { label: "수원시", value: "수원시" },
  { label: "고양시", value: "고양시" },
  { label: "성남시", value: "성남시" },
  { label: "부천시", value: "부천시" },
  { label: "안양시", value: "안양시" },
  { label: "광명시", value: "광명시" },
  { label: "평택시", value: "평택시" },
  { label: "안산시", value: "안산시" },
  { label: "과천시", value: "과천시" },
  { label: "오산시", value: "오산시" },
  { label: "시흥시", value: "시흥시" },
  { label: "군포시", value: "군포시" },
  { label: "의왕시", value: "의왕시" },
  { label: "하남시", value: "하남시" },
  { label: "용인시", value: "용인시" },
  { label: "이천시", value: "이천시" },
  { label: "안성시", value: "안성시" },
  { label: "김포시", value: "김포시" },
  { label: "화성시", value: "화성시" },
  { label: "광주시", value: "광주시" },
  { label: "의정부시", value: "의정부시" },
  { label: "동두천시", value: "동두천시" },
  { label: "구리시", value: "구리시" },
  { label: "남양주시", value: "남양주시" },
  { label: "파주시", value: "파주시" },
  { label: "양주시", value: "양주시" },
  { label: "포천시", value: "포천시" },
  { label: "여주시", value: "여주시" },
  { label: "연천군", value: "연천군" },
  { label: "가평군", value: "가평군" },
  { label: "양평군", value: "양평군" },
];

const gangwon = [
  { label: "원주시", value: "원주시" },
  { label: "춘천시", value: "춘천시" },
  { label: "강릉시", value: "강릉시" },
  { label: "동해시", value: "동해시" },
  { label: "속초시", value: "속초시" },
  { label: "삼척시", value: "삼척시" },
  { label: "태백시", value: "태백시" },
  { label: "흥청군", value: "흥청군" },
  { label: "철원군", value: "철원군" },
  { label: "횡성군", value: "횡성군" },
  { label: "평창군", value: "평창군" },
  { label: "정선군", value: "정선군" },
  { label: "영월군", value: "영월군" },
  { label: "인제군", value: "인제군" },
  { label: "고성군", value: "고성군" },
  { label: "양양군", value: "양양군" },
  { label: "화천군", value: "화천군" },
  { label: "양구군", value: "양구군" },
];

const LocationPicker = () => {
  const pickerRef = useRef();
  const [value, setValue] = useState();
  const [prov, setProv] = useState();

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 3 }}
    >
      <MaterialIcons
        name="location-on"
        size={18}
        color="black"
        style={{ marginRight: 2 }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => pickerRef.current.show()}
      >
        <Text style={{ fontSize: fontSizes.base, color: colors.black }}>
          {prov ? prov : "시/도"}
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: fontSizes.base,
          color: colors.grey,
          marginHorizontal: 4,
        }}
      >
        |
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => pickerRef.current.show()}
      >
        <Text style={{ fontSize: fontSizes.base, color: colors.black }}>
          {prov ? prov : "시/도"}
        </Text>
      </TouchableOpacity>

      <ReactNativePickerModule
        pickerRef={pickerRef}
        value={value}
        title={"시/도를 선택해주세요."}
        items={province}
        onCancel={() => {
          console.log("Cancelled");
        }}
        onValueChange={(value) => {
          setProv(value);
          setValue(value);
        }}
      />
    </View>
  );
};

export default LocationPicker;
