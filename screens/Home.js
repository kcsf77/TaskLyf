import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import * as Location from 'expo-location';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState('Getting location...');
  const [searchQuery, setSearchQuery] = useState('');

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCurrentLocation('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      setCurrentLocation(data.address.city || data.address.town || 'Unknown');
    } catch (error) {
      console.error('Error getting location:', error);
      setCurrentLocation('Error getting location');
    }
  };

  const handleLocationPress = () => {
    getLocation();
  };

  const handleNotificationPress = () => {
    console.log('Notification button pressed!');
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLocationPress} style={styles.locationContainer}>
          <Image source={require('../assets/icons/Type=Marker.png')} style={styles.locationIcon} />
          <View>
            <Text style={styles.locationText}>Current Location</Text>
            <Text style={styles.locationName}>{currentLocation}</Text>
          </View>
          <Image source={require('../assets/icons/Type=Caret Bottom.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNotificationPress}>
          <Image source={require('../assets/icons/Type=Bell.png')} style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <Image
          source={require('../assets/icons/Type=Search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>

      <Image
        source={require('../assets/image 2.png')} 
        style={styles.promoImage}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  // Add styles for promo image
  promoImage: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    marginTop: 35,
    borderRadius: 10,
  },
});

export default Home;
