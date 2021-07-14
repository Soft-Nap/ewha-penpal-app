import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { colors, fontSizes } from '../Theme';
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';


const Login = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* 로고 이미지 */}
           <Image 
            style={{
                width: 250,
                height: 250,
                marginBottom: 30,
            }}
            source={require('../images/loginLogo.jpg')}
           />
           {/* 아이디, 비밀번호 input, 로그인 버튼 */}
           <View style={{ width: '90%' }}>
            <Input />
            <Input />
            <LoginButton text="로그인"/>
           </View>
           <View style={{ flexDirection: 'row' }}>
            <Text 
                style={{
                    marginTop: 15,
                    fontSize: fontSizes.base,
                    color: 'black',
                }}
            >
                아직 회원이 아니신가요?
            </Text>
            <Text 
                style={{
                    marginTop: 15,
                    marginLeft: 2,
                    fontSize: fontSizes.base,
                    color: colors.green,
                    fontWeight: 'bold',
                }}
                onPress={() => navigation.navigate("Signup")}
            >
                회원가입
            </Text>
           </View>
        </SafeAreaView>
    );
};

export default Login;