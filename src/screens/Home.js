import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { colors, fontSizes } from "../Theme";
import Line from "../components/Line";
import Subtitle from "../components/Subtitle";
import NewButton from "../components/NewButton";

const letters = [];
for (let i = 0; i < 0; i++) {
  letters.push({
    id: i,
    username: "username",
    date: i * 100,
    content: "blahblah",
  });
}

/* 최근 받은 편지 렌더링 */
const RecentLetter = ({ item: { id, username, date, content }, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: 150,
        height: 200,
        backgroundColor: colors.beige,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginRight: 16,
      }}
      onPress={onPress}
    >
      {/* 편지 내용 */}
      <View style={{ width: "100%", height: "80%" }}>
        <Text style={{ fontSize: fontSizes.base, textAlign: "left" }}>
          {content}
        </Text>
      </View>
      {/* 유저 정보 */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: colors.pink,
            borderRadius: 100 / 2,
            borderColor: "black",
            borderWidth: 1,
            marginRight: 10,
          }}
        ></View>
        <View style={{ width: "90%" }}>
          <Text style={{ fontSize: fontSizes.base, marginBottom: 4 }}>
            {username}
          </Text>
          <Text style={{ fontSize: fontSizes.small }}>{date}</Text>
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
        alignItems: "center",
      }}
    >
      {/* Header */}
      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "left",
            marginTop: 80,
          }}
        >
          오늘은 어떤 편지를{"\n"}보내볼까요?
        </Text>
        <Line />
      </View>

      {/* 최근 받은 편지 */}
      <View style={{ width: "90%", height: 310 }}>
        <Subtitle text="최근 받은 편지" bold="true" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={letters}
          renderItem={({ item }) => (
            <RecentLetter
              item={item}
              onPress={() => navigation.navigate("HomeMail")}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: Dimensions.get("window").width,
              }}
            >
              <Text
                style={{
                  fontSize: fontSizes.large,
                  fontWeight: "bold",
                  right: 30,
                  marginBottom: 3,
                }}
              >
                최근 받은 편지가 없어요.
              </Text>
              <Text
                style={{
                  fontSize: fontSizes.base,
                  right: 30,
                }}
              >
                친구들에게 먼저 편지를 보내보세요.
              </Text>
            </View>
          )}
        />
        <Line />
      </View>

      {/* 새로운 편지 */}
      <View style={{ width: "90%" }}>
        <Subtitle text="새로운 편지" bold="true" />
        <NewButton
          status="receive"
          onPress={() => navigation.navigate("HomeReceived")}
        />
        <NewButton
          status="send"
          onPress={() => navigation.navigate("LetterStack")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
