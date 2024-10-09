import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Booking = ({ navigation }) => {
    const handleBookNowPress = () => {
        // Navigate to the Search screen when "Book Now" is pressed
        navigation.navigate('Search');
    };

    return (
        <View style={styles.container}>
            {/* Calendar Image */}
            <Image source={require('../assets/icons/Calendar Icon.png')} style={styles.image} />

            {/* No Appointment Message */}
            <Text style={styles.titleText}>No Appointment Booked!</Text>
            <Text style={styles.subtitleText}>
                You haven’t booked any appointment yet.
            </Text>

            {/* Book Now Button */}
            <TouchableOpacity style={styles.button} onPress={handleBookNowPress}>
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: 150,  // Adjust the width according to your design
        height: 150, // Adjust the height according to your design
        marginBottom: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007bff', // Blue color for the button
        borderRadius: 8,
        paddingVertical: 17,
        paddingHorizontal: 50,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Booking;
