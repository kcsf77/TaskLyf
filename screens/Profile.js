import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/Profile Picture.png')} // Placeholder for profile image
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>IShowSpeed</Text>
        <Text style={styles.profileEmail}>ishowspeed@gmail.com</Text>
        <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuTitle}>Profile</Text>

        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Image 
              source={item.icon } 
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>{item.title}</Text>
            <Image 
              source={require('../assets/icons/next.png')} 
              style={styles.menuArrow}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Array with different images for each item
const menuItems = [
  { title: 'Register as Partner', icon: require('../assets/icons/deal.png') },
  { title: 'My Booking', icon: require('../assets/icons/check.png') },
  { title: 'Help Center', icon: require('../assets/icons/help.png') },
  { title: 'Share & Earn', icon: require('../assets/icons/share_earn.png') },
  { title: 'Rate us', icon: require('../assets/icons/rate.png') },
  { title: 'FAQ’s', icon: require('../assets/icons/faqs.png') },
  { title: 'Privacy Policy', icon: require('../assets/icons/insurance.png') },
  { title: 'Logout', icon: require('../assets/icons/logout.png') }
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding :20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
  editProfileButton: {
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff',
  },
  editProfileText: {
    color: '#007bff',
    fontSize: 10,
  },
  menu: {
    paddingHorizontal: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuArrow: {
    width: 18, 
    height: 18, 
    marginLeft: 'auto', 
  },
});

export default ProfileScreen;