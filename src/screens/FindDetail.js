import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView, SafeAreaView, Alert, View, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';
import {colors} from '../Theme';
import Profile from '../components/Profile';
import {Images} from '../images/Images';
import Tag from '../components/Tag';
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
    font-weight: 600;
`;

const Description = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    color: ${colors.black};
`;

const TagArea = styled.View`
    align-items: center;
    background-color: ${colors.white};
    height: 45px;
    width: 250px;
    flex-direction: row;
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
    width: 334px;
    background-color: ${colors.beige};
    border-width: 1px;
    border-color: ${colors.black};
    border-radius: 20px;
    padding: 20px 20px;
`;
{/*자기소개 부분*/}
const Item = ({ onPress }) => {

    return (
           <Introduce>
             <Description>자기소개입니다</Description>
             <ImageBackground
             style = {{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.green,
              borderRadius: 30,
              borderWidth: 1,
              position: 'absolute',top: 170, left: 270,zIndex: 1,
            }}>
               <MaterialIcons name="send"
                size={40}
                onPress={() => onPress()}
                color={colors.white} />
             </ImageBackground>
           </Introduce> 
        
    );
};
{/*태그*/}
const Tags = () => {
  return (
      <TagArea>
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
          <Tag text = "태그1"/><Tag/><Tag/><Tag/><Tag/><Tag/><Tag/>
        </ScrollView>
      </TagArea>
  );
}

const FindDetail = ({ navigation }) => {
    {/*차단 버튼*/}
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <MaterialIcons name="block"
            size={30}
            style={{ marginRight: 11 }}
            onPress={() => Alert.alert("차단", "차단하시겠습니까?", 
                [{text: "예", onPress: () => console.log("차단 완료")},
                {text: "아니오", onPress: () => console.log("차단 취소")},]
              )}
            />
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
            <Profile size = {180} imageUri = {Images.logo.uri}/>
            <Name>이름</Name>
            <Description>멀리 떨어져 있음</Description>
              <Tags/>
          </Container>
          <View style={{width: '90%',height: 350, alignItems: 'center'}}>
            <Line/>
            <Subtitle text="자기소개" bold="true" />
            <Item onPress={_handleItemPress} />
          </View>
        </SafeAreaView>
        </ScrollView>
    );
};

export default FindDetail;