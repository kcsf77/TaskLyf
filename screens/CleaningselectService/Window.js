import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Window = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Window Cleaning Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Window;
