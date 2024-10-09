import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

// Sample data for Cleaning services with navigation routes
const services = [
    { id: '1', name: 'Standard Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/StandardCleaning.jpg'), route: 'StandardCleaning' },
    { id: '2', name: 'Deep Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/DeepCleaning.jpg'), route: 'DeepCleaning' },
    { id: '3', name: 'Move-In/Move-Out Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/Move-In-Move-Out-Cleaning.jpg'), route: 'MoveinCleaning' },
    { id: '4', name: 'Post-Construction Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/post-construction-cleaning.jpg'), route: 'Post' },
    { id: '5', name: 'Green Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/GreenCleaning.jpg'), route: 'GreenCleaning' },
    { id: '6', name: 'Carpet Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/CarpetCleaning.jpg'), route: 'Carpet' },
    { id: '7', name: 'Window Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/WindowsCleaning.jpg'), route: 'Window' },
    { id: '8', name: 'Laundry and Ironing Services', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/LaundryAndIroningCleaning.jpg'), route: 'Laundry' },
    { id: '9', name: 'Upholstery Cleaning', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/Upholstery-Cleaning.jpg'), route: 'Upholstery' },
    { id: '10', name: 'Disinfection and Sanitization', subtitle: 'include visiting charge', image: require('../../assets/Cleaning/home-disinfection-sanitizationCleaning.jpg'), route: 'Disinfection' },
];

const Cleaning = () => {
    const navigation = useNavigation(); // Get the navigation object

    const handleServicePress = (route) => {
        navigation.navigate(route); // Navigate to the specific screen for the service
    };

    const renderService = ({ item }) => (
        <TouchableOpacity style={styles.serviceItem} onPress={() => handleServicePress(item.route)}>
            <Image source={item.image} style={styles.serviceImage} />
            <View style={styles.serviceTextContainer}>
                <Text style={styles.serviceName}>{item.name}</Text>
                <Text style={styles.serviceSubtitle}>{item.subtitle}</Text>
            </View>
            <Image source={require('../../assets/next.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../assets/Back.png')} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Cleaning Services</Text>
                </View>
                <FlatList
                    data={services}
                    renderItem={renderService}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 20,
    },
    backIcon: {
        width: 42, // Made bigger
        height: 42, // Made bigger
    },
    headerTitle: {
        fontSize: 28, // Made bigger
        fontWeight: 'bold',
        color: '#000',
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    serviceImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    serviceTextContainer: {
        flex: 1,
        marginLeft: 12,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    serviceSubtitle: {
        fontSize: 14,
        color: '#7E7E7E',
    },
    arrowIcon: {
        width: 30,
        height: 30,
        tintColor: '#000',
    },
});

export default Cleaning;
