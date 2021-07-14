import React from 'react';
import {View, Button} from 'react-native';

const FindDetail = ({ navigation }) => {
    return (
            <View>
                <Button title ="Send" onPress={() => navigation.navigate("Send")}/>
            </View>
    );
};
export default FindDetail;