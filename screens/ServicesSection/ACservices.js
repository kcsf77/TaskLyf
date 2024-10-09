import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample data for AC services
const services = [
    { id: '1', name: 'AC Installation', subtitle: 'include visiting charge', image: require('../../assets/ACservices/ACinstallation.jpg'), route: 'ACinstallation' },
    { id: '2', name: 'AC Repair', subtitle: 'include visiting charge', image: require('../../assets/ACservices/ACrepair.jpg'), route: 'ACrepair' },
    { id: '3', name: 'AC Maintenance', subtitle: 'include visiting charge', image: require('../../assets/ACservices/ACmaintenance.jpg'), route: 'ACmaintenance' },
    { id: '4', name: 'AC Cleaning', subtitle: 'include visiting charge', image: require('../../assets/ACservices/ACcleaning.jpg'), route: 'ACcleaning' },
    { id: '5', name: 'AC Gas Top-Up', subtitle: 'include visiting charge', image: require('../../assets/ACservices/ACgasTop-up.jpg'), route: 'ACgastopup' },
    { id: '6', name: 'AC Troubleshooting', subtitle: 'include visiting charge', image: require('../../assets/ACservices/ACtroubleshooting.jpg'), route: 'ACtroubleshooting' },
    { id: '7', name: 'AC Thermostat', subtitle: 'include visiting charge', image: require('../../assets/ACservices/ACthermostat.jpg'), route: 'ACthermostat' },
];

const ACservices = () => {
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
                    <Text style={styles.headerTitle}>AC Services</Text>
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
        width: 42,
        height: 42,
    },
    headerTitle: {
        fontSize: 28,
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

export default ACservices;
