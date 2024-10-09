import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

// Sample data for Electrician
const services = [
    { id: '1', name: 'Electrical Installations', subtitle: 'include visiting charge', image: require('../../assets/Electrician/Electricalinstallation.jpg'), route: 'Electricalinstallation' },
    { id: '2', name: 'Lighting Installation', subtitle: 'include visiting charge', image: require('../../assets/Electrician/LightingInstallation.jpg'), route: 'Lighting' },
    { id: '3', name: 'Wiring Upgrades', subtitle: 'include visiting charge', image: require('../../assets/Electrician/WiringUpgrades.jpg'), route: 'Wiring' },
    { id: '4', name: 'Electrical Repairs', subtitle: 'include visiting charge', image: require('../../assets/Electrician/Electrical_Repair.jpg'), route: 'ElectricalRepairs' },
    { id: '5', name: 'Panel Upgrades', subtitle: 'include visiting charge', image: require('../../assets/Electrician/panel-upgrade.jpg'), route: 'Panel' },
    { id: '6', name: 'Circuit Installation and Repair', subtitle: 'include visiting charge', image: require('../../assets/Electrician/CircuitInstallationandRepair.jpg'), route: 'Circuit' },
    { id: '7', name: 'Safety Inspections', subtitle: 'include visiting charge', image: require('../../assets/Electrician/safety-inspections.jpg'), route: 'Safety' },
    { id: '8', name: 'Generator Installation', subtitle: 'include visiting charge', image: require('../../assets/Electrician/GeneratorInstallation.jpg'), route: 'Generator' },
    { id: '9', name: 'Smoke and Carbon Monoxide Detector Installation', subtitle: 'include visiting charge', image: require('../../assets/Electrician/SmokeandCarbonMonoxideDetectorInstallation.jpg'), route: 'Smoke' },
    { id: '10', name: 'Home Automation and Smart Home Devices', subtitle: 'include visiting charge', image: require('../../assets/Electrician/HomeAutomationandSmartHomeDevices.jpg'), route: 'HomeAutomation' },
    { id: '11', name: 'Outlet and Switch Replacement', subtitle: 'include visiting charge', image: require('../../assets/Electrician/OutletandSwitchReplacement.jpg'), route: 'Outlet' },
    { id: '12', name: 'Surge Protection Installation', subtitle: 'include visiting charge', image: require('../../assets/Electrician/SurgeProtectionInstallation.jpg'), route: 'Surge' },
];

const Electrician = () => {
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
                    <Text style={styles.headerTitle}>Electrician Services</Text>
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

export default Electrician;
