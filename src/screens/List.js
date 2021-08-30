import React, { useContext, useLayoutEffect } from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import { FlatList, Alert, TouchableOpacity, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {colors} from '../Theme';
import Profile from '../components/Profile';
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
    padding: 0px 20px;
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

{/*
const Profile = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border-width: 1px;
    border-color: ${colors.black};
    background-color: ${colors.grey};
`;
*/}

const channels = [];
for (let idx = 0; idx < 10; idx++)
{
    channels.push({
        id: idx,
        title: `친구 ${idx}`,
        description: `내용 ${idx}`,
        createdAt: `시간 ${idx}`,
    });
}

const Item = ({ item: { id, title, description, createdAt }, onPress }) => {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity onPress={() => onPress({ id, title })}
        onLongPress={() => Alert.alert("삭제", "해당 목록을 삭제하시겠습니까?", 
        [{text: "예", onPress: () => {}},
        {text: "취소", onPress: () => {}},]
        )} >
            <ItemContainer>
                <Profile size = {60}/>
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

const List = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <MaterialIcons name="inbox"
            size={30}
            style={{ marginRight: 11 }}
            onPress={() => navigation.navigate('Temp')} />
          ),
        });
      }, []);

    const _handleItemPress = params => {
        navigation.navigate('Item', params);
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
                      title={"편지목록이 비었어요."}
                      description={"펜팔 친구 찾기로 새 친구에게 편지를 보내보세요."}
                    />
                  )}
            />
        </Container>
    );
};

export default List;