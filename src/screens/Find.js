import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { colors, fontSizes } from "../Theme";
import Tag from "../components/Tag";
import Swiper from "react-native-swiper";
import constants from "../utils/constants";
import { Images } from "../images/Images";
import { RFValue } from "react-native-responsive-fontsize";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;
{
  /*화면 위 여백*/
}
const FindHeader = styled.View`
  background-color: ${colors.white};
  height: ${constants.height / 30}px;
  align-items: center;
`;

{
  /*추천 친구 공간*/
}
const FindContents = styled.View`
  background-color: ${colors.white};
  height: ${constants.width*3/2}px;
  align-items: center;
`;

{
  /*추천 친구 틀*/
}
const FriendFrame = styled.View`
  flex-direction: column;
  align-items: center;
  height: ${constants.width*2/ 3}px;
  width: ${constants.width*2/ 3}px;
  background-color: ${colors.green};
  border-width: 1px;
  border-color: ${colors.black};
  border-radius: 20px;
  padding: ${constants.width*1/48}px 0px;
  margin-left: -${constants.width*1/6}px;
`;

{
  /*추천 친구*/
}
const Friend = styled.View`
  flex-direction: column;
  align-items: center;
  height: ${constants.width*30/48-1}px;
  width: ${constants.width*30/48}px;
  background-color: ${colors.beige};
  border-radius: 20px;
  padding: 20px 20px;
`;
{/*
const FindFooter = styled.View`
  background-color: ${colors.white};
  height: ${constants.height / 10}px;
  width: 275px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
*/}
{
  /*
const Profile = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 90px;
    border-width: 1px;
    border-color: ${colors.black};
    background-color: ${colors.grey};
`;
*/
}

const Name = styled.Text`
  font-size: ${RFValue(fontSizes.xlarge, 812)}px;
  font-weight: bold;
  margin-top: 30px;
`;

const Distance = styled.Text`
  font-size: ${RFValue(fontSizes.small, 812)}px;
  margin-top: 5px;
  color: ${colors.black};
`;

const Description = styled.Text`
  font-size: ${RFValue(fontSizes.large, 812)}px;
  margin-top: ${constants.width*5/48}px;
  color: ${colors.black};
`;

const TagArea = styled.View`
  height: ${RFValue(22, 812)}px;
  align-items: center;
  flex-direction: row;
  margin-top: ${constants.width*5/48}px;
`;
{
  /*
const Tag = styled.View`
    align-items: center;
    height: 40px;
    width: 80px;
    background-color:  ${colors.pink};
    margin-right: 5px;
    border-width: 1px;
    border-color:  ${colors.black};
    border-radius: 20px;
`;
*/
}

{
  /*추천 친구*/
}
const Friends = ({ onPress }) => {
  return (
    <FriendFrame>
      {/*프로필 부분 틀*/}
      <Image
        style={{
          width: 115,
          height: 115,
          backgroundColor: colors.green,
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 60,
          position: "absolute",
          top: -57,
          zIndex: -1,
        }}
      />
      <Image
        style={{
          width: 115,
          height: 115,
          backgroundColor: colors.green,
          position: "absolute",
          zIndex: -1,
        }}
      />
      {/*프로필 사진*/}
      <Image
        style={{
          width: 100,
          height: 100,
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 50,
          position: "absolute",
          top: -50,
          zIndex: 1,
        }}
        source={Images.Pig.uri}
      />
      <TouchableOpacity onPress={() => onPress()} activeOpacity={0.8}>
        <Friend>
          <Name>이름</Name>
          <Distance>조금 멀리 있음</Distance>
          <Description>짧막 소개</Description>
          <TagArea>
            <Tag text="태그 1" />
            <Tag text="태그 2" />
            <Tag text="태그 3" />
          </TagArea>
        </Friend>
      </TouchableOpacity>
    </FriendFrame>
  );
};

{
  /*메일 보내기 버튼*/
}
const MailIcon = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.5}
  style={{ position: "absolute", top: constants.width*2/3+constants.width*1/5+constants.height/15 }}
    >
      <View
        style={{
          width: 45,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.beige,
          borderRadius: 30,
          borderWidth: 1,
        }}
      >
        <Image
          source={Images.MailIcon.uri}
          style={{ width: 30, height: 30, resizeMode: "contain" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Find = ({ navigation }) => {
  const _handleItemPress = () => {
    navigation.navigate("FindDetail");
  };
  const _handleMailIconPress = () => {
    navigation.navigate("Send");
  };
  return (
    <Container>
      <FindHeader />
      <FindContents>
        <Swiper
          width={constants.width*3/4}
          dotColor={colors.pink}
          activeDotColor={colors.green}
          showsButtons={true}
          showsPagination={true}
          style={{ padding: constants.width*1/5 }}
          paginationStyle={{ position: "absolute", top: constants.height*1/5 }}
          nextButton={
            <Image
              source={Images.RightArrow.uri}
              style={{ width: 45, height: 45, resizeMode: "contain" }}
            />
          }
          prevButton={
            <Image
              source={Images.LeftArrow.uri}
              style={{ width: 45, height: 45, resizeMode: "contain" }}
            />
          }
          buttonWrapperStyle={{
            position: "absolute",
            left: -3,
            top: -constants.width*3/4+22+constants.width*2/3+constants.width*1/5+constants.height/15,
            paddingHorizontal: constants.width*1/12,
          }}
        >
          <Friends onPress={_handleItemPress} />
          <Friends onPress={_handleItemPress} />
          <Friends onPress={_handleItemPress} />
          <Friends onPress={_handleItemPress} />
          <Friends onPress={_handleItemPress} />
        </Swiper>
        <MailIcon onPress={_handleMailIconPress} />
      </FindContents>
    </Container>
  );
};

export default Find;
