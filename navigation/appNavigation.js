import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from 'react-native'; // Import Image component
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search'; 
import BookingScreen from '../screens/Booking'; 
import ProfileScreen from '../screens/Profile'; 
import FirstScreen from '../screens/FirstPage';
import LoginScreen from '../screens/Login'; 
import SignUpScreen from '../screens/Signup'; 
import VerificationScreen from '../screens/Verification'; 
import InfoScreen from '../screens/InfoPage'; 
import EditProfileScreen from '../screens/EditProfile';
import ACservices from '../screens/ServicesSection/ACservices'; // Add this import
import Cleaning from '../screens/ServicesSection/Cleaning'; // Add this import
import Electrician from '../screens/ServicesSection/Electrician'; // Add this import
import Painting from '../screens/ServicesSection/Painting';
import ACcleaning from '../screens/ACselectService/ACcleaning';
import ACgastopup from '../screens/ACselectService/ACgastopup';
import ACInstallation from '../screens/ACselectService/ACinstallation';
import ACmaintenance from '../screens/ACselectService/ACmaintenance';
import ACrepair from '../screens/ACselectService/ACrepair';
import ACthermostat from '../screens/ACselectService/ACthermostat';
import ACtroubleshooting from '../screens/ACselectService/ACtroubleshooting';
import Carpet from '../screens/CleaningselectService/Carpet';
import DeepCleaning from '../screens/CleaningselectService/DeepCleaning';
import Disinfection from '../screens/CleaningselectService/Disinfection';
import GreenCleaning from '../screens/CleaningselectService/GreenCleaning';
import Laundry from '../screens/CleaningselectService/Laundry';
import MoveinCleaning from '../screens/CleaningselectService/MoveinCleaning';
import Post from '../screens/CleaningselectService/Post';
import StandardCleaning from '../screens/CleaningselectService/StandardCleaning';
import Upholstery from '../screens/CleaningselectService/Upholstery';
import Window from '../screens/CleaningselectService/Window';
import Accent from '../screens/PaintingselectService/Accent';
import Cabinet from '../screens/PaintingselectService/Cabinet';
import Deck from '../screens/PaintingselectService/Deck';
import Exterior from '../screens/PaintingselectService/Exterior';
import Interior from '../screens/PaintingselectService/Interior';
import Staining from '../screens/PaintingselectService/Staining';
import Texture from '../screens/PaintingselectService/Texture';
import TouchUp from '../screens/PaintingselectService/TouchUp';
import Wallpaper from '../screens/PaintingselectService/Wallpaper';
import Wallpreparation from '../screens/PaintingselectService/Wallpreparation';
import Circuit from '../screens/ElectricianselectService/Circuit';
import Electricalinstallation from '../screens/ElectricianselectService/Electricalinstallation';
import ElectricalRepairs from '../screens/ElectricianselectService/ElectricalRepairs';
import Generator from '../screens/ElectricianselectService/Generator';
import HomeAutomation from '../screens/ElectricianselectService/HomeAutomation';
import Lighting from '../screens/ElectricianselectService/Lighting';
import Outlet from '../screens/ElectricianselectService/Outlet';
import Panel from '../screens/ElectricianselectService/Panel';
import Safety from '../screens/ElectricianselectService/Safety';
import Smoke from '../screens/ElectricianselectService/Smoke';
import Surge from '../screens/ElectricianselectService/Surge';
import Wiring from '../screens/ElectricianselectService/Wiring';
import Refer from '../screens/Refer';
import FAQs from '../screens/FAQs';
import PrivacyPolicy from '../screens/PrivacyPolicy';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false, // Show labels
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 10,
    height: 60,
    backgroundColor: '#fff',
  },
  tabBarLabelStyle: {
    fontSize: 12, // Adjust font size as needed
    marginBottom: 5, // Space between label and icon
  },
};

const MainTab = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Home.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Search.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Search</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Booking"
      component={BookingScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Calendar.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Booking</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Profile.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Profile</Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstPage" component={FirstScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Verify" component={VerificationScreen} />
        <Stack.Screen name="InfoPage" component={InfoScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="ACservices" component={ACservices} />
        <Stack.Screen name="Cleaning" component={Cleaning} />
        <Stack.Screen name="Electrician" component={Electrician} />
        <Stack.Screen name="Painting" component={Painting} />
        <Stack.Screen name="ACcleaning" component={ACcleaning} />
        <Stack.Screen name="ACgastopup" component={ACgastopup} />
        <Stack.Screen name="ACinstallation" component={ACInstallation} />
        <Stack.Screen name="ACmaintenance" component={ACmaintenance} />
        <Stack.Screen name="ACrepair" component={ACrepair} />
        <Stack.Screen name="ACthermostat" component={ACthermostat} />
        <Stack.Screen name="ACtroubleshooting" component={ACtroubleshooting} />
        <Stack.Screen name="Carpet" component={Carpet} />
        <Stack.Screen name="DeepCleaning" component={DeepCleaning} />
        <Stack.Screen name="Disinfection" component={Disinfection} />
        <Stack.Screen name="GreenCleaning" component={GreenCleaning} />
        <Stack.Screen name="Laundry" component={Laundry} />
        <Stack.Screen name="MoveinCleaning" component={MoveinCleaning} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="StandardCleaning" component={StandardCleaning} />
        <Stack.Screen name="Upholstery" component={Upholstery} />
        <Stack.Screen name="Window" component={Window} />
        <Stack.Screen name="Accent" component={Accent} />
        <Stack.Screen name="Cabinet" component={Cabinet} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="Exterior" component={Exterior} />
        <Stack.Screen name="Interior" component={Interior} />
        <Stack.Screen name="Staining" component={Staining} />
        <Stack.Screen name="Texture" component={Texture} />
        <Stack.Screen name="TouchUp" component={TouchUp} />
        <Stack.Screen name="Wallpaper" component={Wallpaper} />
        <Stack.Screen name="Wallpreparation" component={Wallpreparation} />
        <Stack.Screen name="Circuit" component={Circuit} />
        <Stack.Screen name="Electricalinstallation" component={Electricalinstallation} />
        <Stack.Screen name="ElectricalRepairs" component={ElectricalRepairs} />
        <Stack.Screen name="Generator" component={Generator} />
        <Stack.Screen name="HomeAutomation" component={HomeAutomation} />
        <Stack.Screen name="Lighting" component={Lighting} />
        <Stack.Screen name="Outlet" component={Outlet} />
        <Stack.Screen name="Panel" component={Panel} />
        <Stack.Screen name="Safety" component={Safety} />
        <Stack.Screen name="Smoke" component={Smoke} />
        <Stack.Screen name="Surge" component={Surge} />
        <Stack.Screen name="Wiring" component={Wiring} />
        <Stack.Screen name="Refer" component={Refer} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
