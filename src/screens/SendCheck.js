import React from 'react';
import {SafeAreaView,View, Button} from 'react-native';
import Subtitle from '../components/Subtitle';
import {CommonActions} from '@react-navigation/native';
import {colors} from '../Theme';
import MyButton from '../components/MyButton';

const SendCheck = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
            flex: 1,
            backgroundColor: colors.white,
            alignItems: 'center',
             }}>
            <View style={{ width: '90%', height: 300, alignItems: 'center', }}>
                {/*이미지*/}
                <Subtitle text="00님에게 편지를 나르는 중..." bold="true" />
                <Subtitle text="남은 시간: " />
            </View>
            <View>
                {/*스택 초기화 후 홈화면으로 이동, 뒤로가기 안됨*/}
                <MyButton text="Home" onPress={() => navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{name: 'Home'}],}),)}
                />
            </View>
        </SafeAreaView>
            
    );
};


export default SendCheck;