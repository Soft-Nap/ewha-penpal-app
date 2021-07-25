import React, { useContext, useLayoutEffect } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../Theme";
import Stamp from "../components/Stamp";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

const Pad = styled.View`
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 345px;
  background-color: ${colors.beige};
  border-width: 1px;
  border-color: ${colors.black};
  border-radius: 20px;
  padding: 20px 20px;
`;

const MailHeader = styled.View`
  flex-direction: row;
  height: 80px;
  width: 345px;
  padding: 0px 20px;
`;

const MailContents = styled.View`
  flex-direction: column;
  height: 480px;
  width: 345px;
  padding: 0px 20px;
`;

const MailFooter = styled.View`
  flex-direction: row-reverse;
  height: 30px;
  width: 345px;
  padding: 0px 20px;
`;

const HeaderText = styled.View`
  flex: 1;
  flex-direction: column;
  height: 60px;
  width: 300px;
`;

const Person = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Contents = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  color: ${colors.black};
`;

const Time = styled.Text`
  font-size: 12px;
  color: ${colors.black};
`;
{
  /*
const Stamp = styled.Image`
    width: 60px;
    height: 60px;
    border-width: 1px;
    border-color: ${colors.black};
    background-color: ${colors.green};
`;
*/
}

const channels = [];
for (let idx = 0; idx < 5; idx++) {
  channels.push({
    id: idx,
    title: `title ${idx}`,
    description: `description ${idx}`,
    createdAt: idx,
  });
}

const Item = () => {
  const theme = useContext(ThemeContext);

  return (
    <Pad>
      <MailHeader>
        <HeaderText>
          <Person>To.받는 사람</Person>
          <Time>보낸 시간</Time>
        </HeaderText>
        <Stamp />
      </MailHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MailContents>
          <Contents>
            저 월욜에 깃허브에 올리다가 지금까지 했던 거 싹 다 날렸어요ㅠㅠ
          </Contents>
        </MailContents>
      </ScrollView>
      <MailFooter>
        <Person>From.보내는 사람</Person>
      </MailFooter>
    </Pad>
  );
};

const HomeMail = ({ navigation }) => {
  return (
    <Container>
      <Item />
    </Container>
  );
};

export default HomeMail;
