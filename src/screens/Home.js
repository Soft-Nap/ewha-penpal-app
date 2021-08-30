import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { colors, fontSizes } from "../Theme";
import Line from "../components/Line";
import Subtitle from "../components/Subtitle";
import NewButton from "../components/NewButton";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Tooltip from 'react-native-walkthrough-tooltip';
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const letters = [];
for (let i = 0; i < 2; i++) {
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
        width: responsiveWidth(35),
        height: responsiveHeight(22.3),
        backgroundColor: colors.beige,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        paddingVertical: responsiveHeight(2.3),
        paddingHorizontal: responsiveWidth(2),
        marginRight: responsiveWidth(4.5),
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
            width: responsiveWidth(10),
            height: responsiveWidth(10),
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
  const [showTip, setTip] = useState(true);
  const _onDone = async showTip => {
      await AsyncStorage.setItem('showTip', 'false');
      setTip(false);
  };
  React.useEffect(() => {
    async function getStorage() {
      if (await AsyncStorage.getItem("showTip")) {
        let value = await AsyncStorage.getItem("showTip");
        console.log(value)
        if (value === 'false'){
          setTip(false)
        } else {
          setTip(true)
        }
      }
    }
    getStorage();
  }, []);
  
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
            marginTop: responsiveHeight(9),
          }}
        >
          오늘은 어떤 편지를{"\n"}보내볼까요?
        </Text>
        <Line />
      </View>

      {/* 최근 받은 편지 */}
      <View style={{ width: "90%" }}>
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
          keyExtractor={(item) => item['id'].toString()}
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
      <Tooltip
        isVisible={showTip}
        content={
          <View>
            <Text> {`원활한 매칭을 위해 \n 더보기에서 프로필을 설정해주세요!`} </Text>
          </View>
        }
        onClose={() => _onDone(showTip)}
        placement="top"
        showChildInTooltip={false}
        tooltipStyle={{position: "absolute", top:responsiveHeight(75)}}
        contentStyle={{alignItems: 'center'}}
      >
            <Image
            style={{ width: 1, height: 1}}/>
      </Tooltip>
    </SafeAreaView>
  );
};

export default Home;
