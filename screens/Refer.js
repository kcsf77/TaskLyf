import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const Refer = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Navigate back when pressed
      >
        <Image source={require('../assets/Back.png')} style={styles.backImage} />
      </TouchableOpacity>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Image source={require('../assets/icons/money-bag.png')} style={styles.image} />
        <Text style={styles.title}>Share with friends</Text>
        <Text style={styles.subtitle}>
          Refer to your friend and get a cash reward of <Text style={styles.boldText}>₱100</Text>
        </Text>
      </View>

      {/* Share button */}
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Share Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 15, // Increased padding for larger touch area
  },
  backImage: {
    width: 60, // Increased size
    height: 60, // Increased size
    resizeMode: 'contain',
  },
  mainContent: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 250, // Increased size for the money image
    height: 250, // Increased size for the money image
    resizeMode: 'contain',
    marginBottom: 20, // Added margin for spacing
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 30,
  },
  boldText: {
    fontWeight: 'bold', // Make the ₱100 text bold
  },
  shareButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 20, // Increased padding for a larger button
    paddingHorizontal: 60, // Increased padding for a larger button
    borderRadius: 10,
    marginTop: 20, // Margin to bring it closer to the text
  },
  shareButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20, // Increased font size for better visibility
  },
});

export default Refer;
