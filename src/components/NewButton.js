import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { fontSizes, colors } from '../Theme';
import { AntDesign } from '@expo/vector-icons';

{/* 메인 화면 새로운 편지 버튼 */}
const NewButton = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
            style={{
                backgroundColor: props.status === 'send' ? colors.green : colors.pink,
                alignItems: 'center',
                borderRadius: 15,
                flexDirection: 'row', 
                borderColor: 'black',
                borderWidth: 1,
                padding: 20,
                marginBottom: 14,
            }}
        >
            <Text style={{ marginRight: 20 }}>
                { props.status === 'send' ? '📤' : '📥' }
            </Text>
            <Text 
                style={{
                    flex: 2,
                    fontSize: fontSizes.base,
                    marginRight: 20,
                }}>
                { props.status === 'send' ? "통의 편지를 보내고 있어요" : "통의 편지가 오고 있어요" }
            </Text>
            <AntDesign name="right" size={24} color="black" />        
        </TouchableOpacity>
    );
};

export default NewButton;