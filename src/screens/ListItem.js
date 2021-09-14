import React, { useContext, useLayoutEffect } from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import { FlatList, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {colors} from '../Theme';

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
for (let idx = 0; idx < 5; idx++)
{
    channels.push({
        id: idx,
        title: `To. 친구${idx}`,
        description: `내용 ${idx}`,
        createdAt: `시간${idx}`,
    });
}

const Items = ({ item: { id, title, description, createdAt }, onPress }) => {
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

const Item = ({ navigation, route: { params } }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `${params.title}님과 주고받은 편지`,
            headerRight: () => (
            <MaterialIcons name="inbox"
            size={30}
            style={{ marginRight: 11 }}
            onPress={() => navigation.navigate('Temp')} />
          ),
        });
      }, []);
    const _handleItemPress = params => {
        navigation.navigate('Mail', params);
    };

    return (
        <Container>
            <FlatList
                keyExtractor={item => item['id'].toString()}
                data={channels}
                renderItem={({ item }) => (
                    <Items item={item} onPress={_handleItemPress} />
                )}
            />
        </Container>
    );
};

export default Item;