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
  { label: "인천광역시", value: "인천광역시" },
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

const chungnam = [
  { label: "대전광역시", value: "대전광역시" },
  { label: "공주시", value: "공주시" },
  { label: "천안시", value: "공주시" },
  { label: "보령시", value: "보령시" },
  { label: "아산시", value: "아산시" },
  { label: "서산시", value: "서산시" },
  { label: "논산시", value: "논산시" },
  { label: "계룡시", value: "계룡시" },
  { label: "당진시", value: "당진시" },
  { label: "금산군", value: "금산군" },
  { label: "부여군", value: "부여군" },
  { label: "서천군", value: "서천군" },
  { label: "청양군", value: "청양군" },
  { label: "홍성군", value: "홍성군" },
  { label: "예산군", value: "예산군" },
  { label: "태안군", value: "태안군" },
];

const chungbuk = [
  { label: "세종특별자치시", value: "세종특별자치시" },
  { label: "청주시", value: "청주시" },
  { label: "충주시", value: "충주시" },
  { label: "제천시", value: "제천시" },
  { label: "보은군", value: "보은군" },
  { label: "옥천군", value: "옥천군" },
  { label: "영동군", value: "영동군" },
  { label: "증평군", value: "증평군" },
  { label: "진천군", value: "진천군" },
  { label: "괴산군", value: "괴산군" },
  { label: "음성군", value: "음성군" },
  { label: "단양군", value: "단양군" },
];

const jeonnam = [
  { label: "광주광역시", value: "광주광역시" },
  { label: "목포시", value: "목포시" },
  { label: "여수시", value: "여수시" },
  { label: "순천시", value: "순천시" },
  { label: "나주시", value: "나주시" },
  { label: "광양시", value: "광양시" },
  { label: "담양군", value: "담양군" },
  { label: "곡성군", value: "곡성군" },
  { label: "구례군", value: "구례군" },
  { label: "고흥군", value: "고흥군" },
  { label: "보성군", value: "보성군" },
  { label: "화순군", value: "화순군" },
  { label: "장흥군", value: "장흥군" },
  { label: "강진군", value: "강진군" },
  { label: "해남군", value: "해남군" },
  { label: "영암군", value: "영암군" },
  { label: "장성군", value: "장성군" },
  { label: "완도군", value: "완도군" },
  { label: "진도군", value: "진도군" },
  { label: "신안군", value: "신안군" },
];

const jeonbuk = [
  { label: "전주시", value: "전주시" },
  { label: "익산시", value: "익산시" },
  { label: "군산시", value: "군산시" },
  { label: "정읍시", value: "정읍시" },
  { label: "김제시", value: "김제시" },
  { label: "남원시", value: "남원시" },
  { label: "완주군", value: "완주군" },
  { label: "고창군", value: "고창군" },
  { label: "부안군", value: "부안군" },
  { label: "임실군", value: "임실군" },
  { label: "순창군", value: "순창군" },
  { label: "진안군", value: "진안군" },
  { label: "무주군", value: "무주군" },
  { label: "장수군", value: "장수군" },
];

const gyeongbuk = [
  { label: "대구광역시", value: "대구광역시" },
  { label: "포항시", value: "포항시" },
  { label: "경주시", value: "경주시" },
  { label: "김천시", value: "김천시" },
  { label: "안동시", value: "안동시" },
  { label: "구미시", value: "구미시" },
  { label: "영주시", value: "영주시" },
  { label: "영천시", value: "영천시" },
  { label: "상주시", value: "상주시" },
  { label: "문경시", value: "문경시" },
  { label: "경산시", value: "경산시" },
  { label: "군위군", value: "군위군" },
  { label: "의성군", value: "의성군" },
  { label: "청송군", value: "청송군" },
  { label: "영양군", value: "영양군" },
  { label: "영덕군", value: "영덕군" },
  { label: "청도군", value: "청도군" },
  { label: "고령군", value: "고령군" },
  { label: "성주군", value: "성주군" },
  { label: "칠곡군", value: "칠곡군" },
  { label: "예천군", value: "예천군" },
  { label: "봉화군", value: "봉화군" },
  { label: "울진군", value: "울진군" },
  { label: "울릉군", value: "울릉군" },
];

const gyeongnam = [
  { label: "부산광역시", value: "부산광역시" },
  { label: "창원시", value: "창원시" },
  { label: "김해시", value: "김해시" },
  { label: "진주시", value: "진주시" },
  { label: "양산시", value: "양산시" },
  { label: "거제시", value: "거제시" },
  { label: "통영시", value: "통영시" },
  { label: "사천시", value: "사천시" },
  { label: "밀양시", value: "밀양시" },
  { label: "함안군", value: "함안군" },
  { label: "거창군", value: "거창군" },
  { label: "창녕군", value: "창녕군" },
  { label: "고성군", value: "고성군" },
  { label: "하동군", value: "하동군" },
  { label: "합천군", value: "합천군" },
  { label: "남해군", value: "남해군" },
  { label: "함양군", value: "함양군" },
  { label: "산청군", value: "산청군" },
  { label: "의령군", value: "의령군" },
];

const jeju = [
  { label: "제주시", value: "제주시" },
  { label: "서귀포시", value: "서귀포시" },
];

const emptyCity = [{ label: "", value: "" }];

const getCity = (value) => {
  switch (value) {
    case "서울":
      return seoul;
    case "경기":
      return gyeonggi;
    case "강원":
      return gangwon;
    case "충남":
      return chungnam;
    case "전남":
      return jeonnam;
    case "전북":
      return jeonbuk;
    case "충북":
      return chungbuk;
    case "경남":
      return gyeongnam;
    case "경북":
      return gyeongbuk;
    case "제주":
      return jeju;
    default:
      return emptyCity;
  }
};

const LocationPicker = () => {
  const pickerRef = useRef();
  const pickerRef2 = useRef();
  const [provValue, setProvValue] = useState();
  const [prov, setProv] = useState();
  const [detailValue, setDetailValue] = useState();
  const [detail, setDetail] = useState();

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
      {/* 도 */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => pickerRef.current.show()}
      >
        <Text style={{ fontSize: fontSizes.base, color: colors.black }}>
          {prov ? prov : "시/도"}
        </Text>
      </TouchableOpacity>
      {/* 구분선 */}
      <Text
        style={{
          fontSize: fontSizes.base,
          color: colors.grey,
          marginHorizontal: 4,
        }}
      >
        |
      </Text>
      {/* 시/구 */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => pickerRef2.current.show()}
      >
        <Text style={{ fontSize: fontSizes.base, color: colors.black }}>
          {detail ? detail : "시/구"}
        </Text>
      </TouchableOpacity>

      <ReactNativePickerModule
        pickerRef={pickerRef}
        value={provValue}
        title={"시/도를 선택해주세요."}
        items={province}
        onValueChange={(provValue) => {
          setProv(provValue);
          setProvValue(provValue);
          setDetail("");
        }}
      />

      <ReactNativePickerModule
        pickerRef={pickerRef2}
        value={detailValue}
        title={"시/구를 선택해주세요."}
        items={getCity(prov)}
        onValueChange={(detailValue) => {
          setDetail(detailValue);
          setDetailValue(detailValue);
        }}
      />
    </View>
  );
};

export default LocationPicker;
