import React from 'react';
import {View, Button, Pressable, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import {colors} from '../Theme';

const Container = styled.View`
    flex: 1;
    background-color:  ${colors.white};
    align-items: center;
`;
{/*화면 위 여백*/}
const FindHeader = styled.View`
background-color:  ${colors.white};
height: 200px;
align-items: center;
`;
{/*추천 친구*/}
const Friend = styled.View`
    flex-direction: column;
    align-items: center;
    height: 257px;
    width: 257px;
    background-color:  ${colors.beige};
    border-width: 1px;
    border-color:  ${colors.black};
    border-radius: 20px;
    padding: 20px 20px;
`;

const FindFooter = styled.View`
background-color:  ${colors.white};
height: 200px;
width: 275px
align-items: center;
flex-direction: row;
`;

const Name = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

const Description = styled.Text`
    font-size: 14px;
    margin-top: 5px;
    color:  ${colors.black};
`;
const TagArea = styled.View`
    background-color:  ${colors.beige};
    height: 40px;
    width: 250px;
    align-items: center;
    flex-direction: row;
`;

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


const Find = ({ navigation }) => {
    return (
        <Container>
            <FindHeader>
            </FindHeader>
            <Pressable onPress={() => navigation.navigate('FindDetail')}>
                <Friend>
                    <Name>이름</Name>
                    <Description>조금 멀리 있음</Description>
                    <Description>짧막 소개</Description>
                    <TagArea><Tag/><Tag/><Tag/></TagArea>
                </Friend>
            </Pressable>
            <FindFooter>
                {/*왼쪽 넘기기 버튼*/}
                <Entypo name="chevron-with-circle-left" 
                    size={24} 
                    color="black"
                    style={{ marginRight: 50}}/>
                {/*메일 보내기 버튼*/}
                <Entypo name="mail"
                    size={24}
                    style={{ marginRight: 50, marginLeft: 50  }}
                    onPress={() => navigation.navigate('Send')} />
                {/*오른쪽 넘기기 버튼*/}
                <Entypo name="chevron-with-circle-right" 
                    size={24} 
                    color="black" 
                    style={{ marginLeft: 50 }}/>
            </FindFooter>
        </Container>
    );
};

export default Find;