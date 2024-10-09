import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

// Sample data for Painting services with navigation routes
const services = [
    { id: '1', name: 'Interior Painting', subtitle: 'include visiting charge', image: require('../../assets/Painting/InteriorPainting.jpg'), route: 'Interior' },
    { id: '2', name: 'Exterior Painting', subtitle: 'include visiting charge', image: require('../../assets/Painting/ExteriorPainting.jpg'), route: 'Exterior' },
    { id: '3', name: 'Wall Preparation', subtitle: 'include visiting charge', image: require('../../assets/Painting/wallpreparationPainting.jpg'), route: 'Wallpreparation' },
    { id: '4', name: 'Accent Wall Painting', subtitle: 'include visiting charge', image: require('../../assets/Painting/accentwallPainting.jpg'), route: 'Accent' },
    { id: '5', name: 'Staining and Varnishing', subtitle: 'include visiting charge', image: require('../../assets/Painting/StainingandVarnishingPainting.jpg'), route: 'Staining' },
    { id: '6', name: 'Wallpaper Removal and Wall Painting', subtitle: 'include visiting charge', image: require('../../assets/Painting/wallpaperRemovalandWallPainting.jpg'), route: 'Wallpaper' },
    { id: '7', name: 'Texture Painting', subtitle: 'include visiting charge', image: require('../../assets/Painting/texturePainting.jpg'), route: 'Texture' },
    { id: '8', name: 'Cabinet Painting and Refinishing', subtitle: 'include visiting charge', image: require('../../assets/Painting/cabinetPaintingandRefinishing.jpg'), route: 'Cabinet' },
    { id: '9', name: 'Deck and Fence Painting or Staining', subtitle: 'include visiting charge', image: require('../../assets/Painting/deckAndFencePainting.jpg'), route: 'Deck' },
    { id: '10', name: 'Touch-Up and Repair', subtitle: 'include visiting charge', image: require('../../assets/Painting/TouchUpandRepair.jpg'), route: 'TouchUp' },
];

const Painting = () => {
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
                    <Text style={styles.headerTitle}>Painting Services</Text>
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

export default Painting;
