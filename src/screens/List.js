import React, { useContext, useLayoutEffect } from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import { FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {colors} from '../Theme';
import Profile from '../components/Profile';

const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
`;

const ItemContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
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
    font-weight: 600;
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
        <ItemContainer onPress={() => onPress({ id, title })} >
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
            />
        </Container>
    );
};

export default List;