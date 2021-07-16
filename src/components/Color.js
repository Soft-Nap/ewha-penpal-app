import React from 'react';
import { Pressable} from 'react-native';
import { colors } from '../Theme';

{/* 편지 쓰기 화면 편지 색 바꾸기 버튼 */}
const Color = (props) => {
    return (
        <Pressable
            activeOpacity={0.8}
            onPress={props.onPress}
            style={{
                height: 40,
                width: 40,
                backgroundColor: props.status === 'red' ? colors.red : colors.pink,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 1,
            }}
        >     
        </Pressable>
    );
};

export default Color;