import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSizes } from '../Theme';

const Subtitle = (props) => {
    return (
        <Text
            style={[styles.text, props.bold && styles.boldText]}
        >
            {props.text}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.large,
        marginBottom: 20,
    },
    boldText: {
        fontSize: fontSizes.large,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Subtitle;