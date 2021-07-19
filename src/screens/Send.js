import React, { useContext, useLayoutEffect, useState } from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import { Modal, Pressable, Alert} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Color from '../components/Color';
import {colors, White, Pink,Beige} from '../Theme';
import StampModal from '../components/StampModal';
import Profile from '../components/Profile';


const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
    align-items: center;
`;

const Pad = styled.View`
    flex-direction: column;
    align-items: center;
    height: 600px;
    width: 345px;
    background-color: ${props => props.theme.value};
    border-width: 1px;
    border-color: ${colors.black};
    border-radius: 20px;
    padding: 20px 20px;
`;

const MailHeader = styled.View`

    flex-direction: row;
    height: 80px;
    width: 345px;
    padding: 0px 20px;
`;

const MailContents = styled.View`
    flex-direction: column;
    height: 450px;
    width: 345px;
    padding: 0px 20px;
`;

const MailFooter = styled.View`
    flex-direction: row-reverse;
    height: 30px;
    width: 345px;
    padding: 0px 20px;
`;

const HeaderText = styled.View`
    flex: 1;
    flex-direction: column;
    height: 60px;
    width: 300px;
    margin-left: 5px;
`;

const Person = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

const Time = styled.Text`
    font-size: 12px;
    color: ${colors.black};
`;

{/*
const Stamp = styled.Image`
    width: 60px;
    height: 60px;
    border-width: 1px;
    border-color: ${colors.black};
    background-color: ${colors.grey};
`; */}

const Input = styled.TextInput`
    font-size: 14px;
`;

const ColorSelectArea = styled.View`
    flex-direction: row;
    height: 80px;
    width: 345px;
    padding: 20px 0px;
`;

const Item = () => {
    const [padColor, setColor] = useState(White);
    return (
            <ThemeProvider theme = {padColor}>
              <Pad>
            <MailHeader>
                <Profile size={50} />
                <HeaderText>
                    <Person>To.받는 사람</Person>
                    <Time>떨어진 거리</Time>
                </HeaderText>
                <StampModal />
                {/*<Pressable onPress={() => Alert.alert("우표 선택")}>
                    <Stamp/>
                    </Pressable>*/}
            </MailHeader> 
              <MailContents>
            <Input  multiline={true} 
                    placeholder="편지내용을 입력해주세요." 
                    returnKeyType="done"
                    autoCapitalize="none"/>
            </MailContents>
            <MailFooter>
                <Person>From.보내는 사람</Person>
            </MailFooter>
        </Pad>
        {/*편지지 색 바꾸기*/}
        <ColorSelectArea>
            <Color color= {colors.beige} onPress={() => setColor(Beige)}/>
            <Color color= {colors.pink} onPress={() => setColor(Pink)}/>
            <Color color= {colors.white} onPress={() => setColor(White)}/>
        </ColorSelectArea>   
            </ThemeProvider>
           
    );
};

const Send = ({ navigation }) => {
    {/*헤더 취소 및 보내기 버튼*/}
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <MaterialIcons name="send"
            size={30}
            style={{ marginRight: 11 }}
            onPress={() => navigation.navigate('SendCheck')} />
          ),
          headerLeft: () => (
            <MaterialIcons name="close"
            size={30}
            style={{ marginRight: 11 }}
            onPress={() => Alert.alert("경고", "저장하지 않고 나갈경우 모두 지워질 수 있습니다.\n저장하시겠습니까?", 
            [{text: "취소", onPress: () => console.log("실행취소")},
            {text: "예", onPress: () => console.log("저장")},
            {text: "아니오", onPress: () => console.log("저장안함")},]
          )} />
          ),
        });
      }, []);
    return (
        <Container>
            <Item />
        </Container>
    );
};

export default Send;