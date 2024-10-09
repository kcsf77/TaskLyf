import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Search = () => {
    return (
        <View style={styles.container}>
            {/* Back Button and Banner */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <Image source={require('../assets/Back.png')} style={styles.icon} />
                </TouchableOpacity>

                <Image source={require('../assets/icons/Banner.png')} style={styles.banner} />
            </View>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
                <Image source={require('../assets/icons/Type=Search.png')} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for locations & services"
                    placeholderTextColor="#999"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        width: 50,  // Increase size of the button
        height: 50, // Increase size of the button
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,  // Add space between back button and banner
    },
    icon: {
        width: 50,  // Increase size of the back icon
        height: 50, // Increase size of the back icon
    },
    banner: {
        width: 180,  // Adjust banner size as needed
        height: 60,  // Adjust banner size as needed
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
});

export default Search;
