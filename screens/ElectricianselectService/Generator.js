import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

// Sample data for generator installation services
const services = [
    { id: '1', name: 'Portable Generator Installation', duration: '2 hours', price: 200 },
    { id: '2', name: 'Standby Generator Installation', duration: '4 hours', price: 500 },
    { id: '3', name: 'Generator Maintenance', duration: '1 hour', price: 150 },
];

const Generator = ({ navigation }) => {
    const [selectedServices, setSelectedServices] = useState({});

    const toggleService = (id) => {
        setSelectedServices((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const totalSelected = Object.values(selectedServices).filter(Boolean).length;

    // Compute total price based on selected services
    const totalPrice = Object.keys(selectedServices).reduce((total, id) => {
        if (selectedServices[id]) {
            const service = services.find(service => service.id === id);
            return total + (service ? service.price : 0);
        }
        return total;
    }, 0);

    const renderService = ({ item }) => (
        <View style={styles.serviceContainer}>
            <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>{item.name}</Text>
                <View style={styles.durationContainer}>
                    <Image source={require('../../assets/icons/clock.png')} style={styles.clockImage} />
                    <Text style={styles.serviceDuration}>{item.duration}</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('More Info Clicked')}>
                    <Text style={styles.moreInfoText}>MORE INFO</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.servicePrice}>₱ {item.price}</Text>
            <TouchableOpacity onPress={() => toggleService(item.id)}>
                <Image
                    source={selectedServices[item.id]
                        ? require('../../assets/icons/minus.png')
                        : require('../../assets/icons/plus.png')
                    }
                    style={styles.addButtonImage}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/Back.png')} style={styles.backButtonImage} />
                </TouchableOpacity>
                <Text style={styles.header}>Generator Installation Services</Text>
            </View>
            <View style={styles.headerLine} />
            <FlatList
                data={services}
                renderItem={renderService}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.headerLine} />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>
                    <Text style={styles.price}>₱ {totalPrice}</Text> | {totalSelected} item{totalSelected !== 1 ? 's' : ''} inc. of all taxes
                </Text>
                <TouchableOpacity style={styles.proceedButton}>
                    <Text style={styles.proceedButtonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    backButton: {
        marginRight: 20,
    },
    backButtonImage: {
        width: 50,
        height: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
    },
    headerLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        marginBottom: 15,
    },
    serviceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    serviceInfo: {
        flex: 1,
        marginRight: 10,
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    serviceDuration: {
        fontSize: 14,
        color: '#7E7E7E',
        marginLeft: 5,
    },
    clockImage: {
        width: 16,
        height: 16,
    },
    moreInfoText: {
        fontSize: 14,
        color: '#007BFF',
        marginTop: 5,
    },
    servicePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 20,
    },
    addButtonImage: {
        width: 28,
        height: 28,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        paddingHorizontal: 16,
    },
    totalText: {
        fontSize: 16,
        color: '#4E4E4E',
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    proceedButton: {
        backgroundColor: '#007BFF',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    proceedButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Generator;
