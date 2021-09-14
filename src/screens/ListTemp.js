import React, { useContext, useLayoutEffect } from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import { FlatList, Alert, TouchableOpacity, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {colors} from '../Theme';
import Subtitle from '../components/Subtitle';
import { Images } from '../images/Images';
import EmptyStateScreen from "./EmptyStateScreen";

const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
`;

const ItemContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border-width: 0.5px;
    border-color: ${colors.grey};
    padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
`;

const ItemTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const ItemDescription = styled.Text`
    font-size: 14px;
    margin-top: 5px;
    color: ${colors.black};
`;

const ItemTime = styled.Text`
    font-size: 12px;
    color: ${colors.black};
`;

const channels = [];
for (let idx = 0; idx < 0; idx++)
{
    channels.push({
        id: idx,
        title: `title ${idx}`,
        description: `description ${idx}`,
        createdAt: idx,
    });
}

const Item = ({ item: { id, title, description, createdAt }, onPress }) => {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity onPress={() => onPress({ id, title })}
        onLongPress={() => Alert.alert("삭제", "해당 목록을 삭제하시겠습니까?", 
        [{text: "예", onPress: () => {}},
        {text: "취소", onPress: () => {}},]
        )}>
            <ItemContainer>
                <ItemTextContainer>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDescription>{description}</ItemDescription>
                </ItemTextContainer>
                <ItemTime>{createdAt}</ItemTime>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                />
            </ItemContainer>
        </TouchableOpacity>
    );
};

const Temp = ({ navigation }) => {
    
    const _handleItemPress = params => {
        navigation.navigate('Send', params);
    };

    return (
        <Container>
            <FlatList
                keyExtractor={item => item['id'].toString()}
                data={channels}
                renderItem={({ item }) => (
                    <Item item={item} onPress={_handleItemPress} />
                )}
                ListEmptyComponent={() => (
                    <EmptyStateScreen
                      imageUri={Images.HomeLetterEmpty.uri}
                      title={"임시 저장함이 텅텅 비었어요."}
                    />
                  )}
            />
        </Container>
    );
};

export default Temp;