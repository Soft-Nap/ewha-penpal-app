import React from 'react';
import {View, Button} from 'react-native';

const Send = ({ navigation }) => {
    return (
            <View>
                <Button title ="SendCheck" onPress={() => navigation.navigate("SendCheck")}/>
            </View>
    );
};
export default Send;