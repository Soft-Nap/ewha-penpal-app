import React from 'react';
import {View, Button, Pressable, ImageBackground} from 'react-native';
import styled, {ThemeContext} from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
`;
{/*화면 위 여백*/}
const FindHeader = styled.View`
background-color: #ffffff;
height: 200px;
align-items: center;
`;
{/*추천 친구*/}
const Friend = styled.View`
    flex-direction: column;
    align-items: center;
    height: 336px;
    width: 275px;
    border-width: 1px;
    border-color: #000000;
    border-radius: 20px;
    padding: 20px 20px;
`;

const FindFooter = styled.View`
background-color: #ffffff;
height: 200px;
width: 275px
align-items: center;
flex-direction: row;
`;

const tag = styled.View`
flex-direction: column;
align-items: center;
height: 400px;
width: 400px;
border-width: 1px;
border-color: #000000;
border-radius: 20px;
padding: 20px 20px;
`;


const Find = ({ navigation }) => {
    return (
        <Container>
            <FindHeader>
            </FindHeader>
            <Pressable onPress={() => navigation.navigate('FindDetail')}>
                <Friend>
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