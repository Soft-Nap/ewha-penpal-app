import React, { useContext, useLayoutEffect, useState } from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import { Alert, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Color from '../components/Color';
import {colors, White, Pink, Beige, fontSizes} from '../Theme';
import StampModal from '../components/StampModal';
import Profile from '../components/Profile';
import constants from '../utils/constants';
import Buttons from '../components/Buttons';
import { RFValue } from "react-native-responsive-fontsize";

const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
    align-items: center;
`;

const Pad = styled.View`
    flex-direction: column;
    align-items: center;
    height: ${constants.height*3/4}px;
    width: ${constants.width*3/4}px;
    background-color: ${props => props.theme.value};
    border-width: 1px;
    border-color: ${colors.black};
    border-radius: 20px;
    padding: 20px 20px;
`;

const MailHeader = styled.View`

    flex-direction: row;
    height: 80px;
    width: ${constants.width*3/4}px;
    padding: 0px 20px;
`;

const MailContents = styled.View`
    flex-direction: column;
    height: ${constants.height*9/16}px;
    width: ${constants.width*3/4}px;
    padding: 0px 20px;
`;

const MailFooter = styled.View`
    flex-direction: row-reverse;
    height: 35px;
    width: ${constants.width*3/4}px;
    padding: 0px 20px;
`;

const HeaderText = styled.View`
    flex: 1;
    flex-direction: column;
    height: 60px;
    width: ${constants.width*3/4}px;
    margin-left: 5px;
`;

const Person = styled.Text`
    font-size: ${RFValue(fontSizes.xlarge, 812)}px;
    font-weight: 600;
`;

const Time = styled.Text`
    font-size: ${RFValue(fontSizes.base, 812)}px;
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
    font-size: ${RFValue(fontSizes.large, 812)}px;
`;

const ColorSelectArea = styled.View`
    flex-direction: row;
    height: 80px;
    width: ${constants.width*3/4}px;
    padding: 0px 0px;
`;

const Item = () => {
    const [padColor, setColor] = useState(White);
    return (
            <ThemeProvider theme = {padColor}>
              <Pad>
            <MailHeader>
                <Profile size={50} />
                <HeaderText>
                    <Person>To.?????? ??????</Person>
                    <Time>????????? ??????</Time>
                </HeaderText>
                <StampModal />
                {/*<Pressable onPress={() => Alert.alert("?????? ??????")}>
                    <Stamp/>
                    </Pressable>*/}
            </MailHeader> 
              <MailContents>
            <Input  multiline={true} 
                    placeholder="??????????????? ??????????????????." 
                    returnKeyType="done"
                    autoCapitalize="none"/>
            </MailContents>
            <MailFooter>
                <Person>From.????????? ??????</Person>
            </MailFooter>
        </Pad>
        {/*????????? ??? ?????????*/}
        <ColorSelectArea>
            <Color color= {colors.beige} onPress={() => setColor(Beige)}/>
            <Color color= {colors.pink} onPress={() => setColor(Pink)}/>
            <Color color= {colors.white} onPress={() => setColor(White)}/>
        </ColorSelectArea>   
            </ThemeProvider>
           
    );
};

const Send = ({ navigation }) => {
    {/*?????? ?????? ??? ????????? ??????*/}
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{flexDirection: "row" }}>
                    <Buttons onPress={() => Alert.alert("??????", "????????? ????????? ?????? ?????????????????????????", 
                    [{text: "???", onPress: () => navigation.popToTop()},
                    {text: "??????", onPress: () => {}},]
                    )} text="??????"/>
                    <Buttons onPress={() => navigation.navigate('SendCheck')} text="?????????" isSend={true}/>
                </View>
          ),
          
          headerLeft: () => (
            <MaterialIcons name="close"
            size={30}
            style={{ marginRight: 11 }}
            onPress={() => Alert.alert("??????", "???????????? ?????? ???????????? ?????? ????????? ??? ????????????.\n?????????????????????????", 
            [{text: "??????", onPress: () => console.log("????????????")},
            {text: "???", onPress: () => {console.log("??????"), navigation.popToTop()}},
            {text: "?????????", onPress: () => {console.log("????????????"), navigation.popToTop()}},]
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