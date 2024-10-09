import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ACcleaning = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AC Cleaning</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // You can change the background color if needed
    },
    text: {
        fontSize: 24,
        color: '#000', // Black text color
    },
});

export default ACcleaning;
