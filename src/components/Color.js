import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../Theme';

{/* 편지 쓰기 화면 편지 색 바꾸기 버튼 */}
const Color = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onPress}
            style={{
                height: 40,
                width: 40,
                backgroundColor: props.color,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 1,
                marginRight: 10,
            }}
        >     
        </TouchableOpacity>
    );
};

export default Color;