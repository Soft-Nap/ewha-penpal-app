import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { colors, fontSizes } from '../Theme';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';
import MyButton from '../components/MyButton';

const Home = () => {
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
            <View style={{ width: '90%' }}>
                <Subtitle text="최근 받은 편지" bold="true" />
                <Line />
            </View>
            {/* 새로운 편지 */}
            <View style={{ width: '90%' }}>
                <Subtitle text="새로운 편지" bold="true" />
            </View>

        </SafeAreaView>
    );
};

export default Home;