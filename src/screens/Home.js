import React from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { colors, fontSizes } from '../Theme';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';
import NewButton from '../components/NewButton';

{/* 최근 받은 편지 렌더링 */}
const renderLetter = ({ item }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                width: 150,
                height: 200,
                backgroundColor: colors.beige,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 1,
                paddingVertical: 20,
                paddingHorizontal: 10,
            }}
        >
            {/* 편지 내용 */}
            <View style={{ width: '100%', height: '80%' }}>
                <Text style={{ fontSize: fontSizes.base, textAlign: 'left' }}>텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍</Text>
            </View>
            {/* 유저 정보 */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <View 
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: colors.pink,
                        borderRadius: 100 / 2,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginRight: 10,
                }}></View>
                <View style={{ width: '90%' }}>
                    <Text style={{ fontSize: fontSizes.base, marginBottom: 4, }}>닉네임</Text>
                    <Text style={{ fontSize: fontSizes.small }}>날짜</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white,
                alignItems: 'center',
            }}
        >
            {/* Header */}
            <View style={{width: '90%'}}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        marginTop: 80,
                    }}
                >오늘은 어떤 편지를{"\n"}보내볼까요?</Text>
                <Line />
            </View>

            {/* 최근 받은 편지 */}
            <View style={{ width: '90%', height: 300 }}>
                <Subtitle text="최근 받은 편지" bold="true" />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // data={letterList}
                    renderItem={renderLetter}
                    // keyExtractor={item => item.id}
                />
                <Line />
            </View>

            {/* 새로운 편지 */}
            <View style={{ width: '90%' }}>
                <Subtitle text="새로운 편지" bold="true" />
                <NewButton status="receive" onPress={() => navigation.navigate("HomeReceived")}/>
                <NewButton status="send" onPress={() => navigation.navigate("HomeSending")}/>
            </View>
        </SafeAreaView>
    );
};

export default Home;