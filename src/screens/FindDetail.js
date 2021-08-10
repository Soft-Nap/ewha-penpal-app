import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView, SafeAreaView, Alert, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';
import {colors} from '../Theme';
import Profile from '../components/Profile';
import {Images} from '../images/Images';
import Tag from '../components/Tag';
import Buttons from '../components/Buttons';
import constants from '../utils/constants';

const Container = styled.View`
    background-color: ${colors.white};
    align-items: center;
    justify-content: center;
`;
{/*
const Profile = styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
    border-width: 1px;
    border-color: ${colors.black};
    background-color: ${colors.grey};
`;
*/}

const Name = styled.Text`
    font-size: 21px;
    font-weight: bold;
`;

const Description = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    color: ${colors.black};
`;

const TagArea = styled.View`
    background-color: ${colors.white};
    height: 50px;
    width: 250px;
`;
{/*
const Tag = styled.View`
  align-items: center;
  height: 40px;
  width: 80px;
  background-color: ${colors.pink};
  border-width: 1px;
  border-color: ${colors.black};
  border-radius: 20px;
  margin-right: 5px;
`;
*/}

{/*긴 자기소개*/}
const Introduce = styled.View`
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: ${constants.width*9/10}px;
    background-color: ${colors.beige};
    border-width: 1px;
    border-color: ${colors.black};
    border-radius: 20px;
    padding: 20px 20px;
`;

{/*자기소개 부분*/}
const Item = () => {
  return (
    <Introduce>
      <Description>자기소개입니다</Description>
    </Introduce> 
  );
};

{/*태그*/}
const Tags = () => {
  return (
      <TagArea>
        <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}
        showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
          <Tag text = "태그1"/>
          <Tag/><Tag/><Tag/><Tag/><Tag/><Tag/>
          <Tag/><Tag/><Tag/><Tag/><Tag/><Tag/>
        </ScrollView>
      </TagArea>
  );
}

{/*보내기 버튼*/}
const SendIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} activeOpacity = {0.9} style={{position: 'absolute', top: 275, left: constants.width*4/5}}>
      <Image source = {Images.SendIcon.uri} style = {{width: 60, height: 60, resizeMode: 'contain'}}/>
    </TouchableOpacity>
  );
};

const FindDetail = ({ navigation }) => {
    {/*차단 버튼*/}
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Buttons onPress={() => Alert.alert("차단", "차단하시겠습니까?", 
            [{text: "예", onPress: () => console.log("차단 완료")},
            {text: "아니오", onPress: () => console.log("차단 취소")},]
          )} text="차단" />
          ),
        });
      }, []);
    
    const _handleItemPress = () => {
        navigation.navigate('Send');
    };
    return (
      <ScrollView>
      <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white,
                alignItems: 'center',
            }}
        >
          <Container>
            <ImageBackground
             style = {{
              width: 180,
              height:180,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.green,
              borderRadius: 90,
              borderWidth: 1,
            }}>
              <Profile size = {160} imageUri = {Images.Bear.uri}/>
            </ImageBackground>
            <Name>이름</Name>
            <Description>멀리 떨어져 있음</Description>
            <Tags/>
          </Container>
          <View style={{width: '90%',height: 375,alignItems: 'center'}}>
            <Line/>
            <Subtitle text="자기소개"/>
            <Item/>
            <SendIcon onPress={_handleItemPress}/>
          </View>
        </SafeAreaView>
        </ScrollView>
    );
};

export default FindDetail;