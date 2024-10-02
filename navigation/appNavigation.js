import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home'; // Make sure the file name is correct
import SearchScreen from '../screens/Search'; 
import BookingScreen from '../screens/Booking'; 
import ProfileScreen from '../screens/Profile'; 
import FirstScreen from '../screens/FirstPage';
import LoginScreen from '../screens/Login'; 
import SignUpScreen from '../screens/Signup'; 
import VerificationScreen from '../screens/Verification'; 
import InfoScreen from '../screens/InfoPage'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
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
};

const MainTab = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Entypo name="home" size={30} color={focused ? '#16247d' : '#111'} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Entypo name="magnifying-glass" size={30} color={focused ? '#16247d' : '#111'} /> // Use "magnifying-glass" instead of "search"
        ),
      }}
    />
    <Tab.Screen
      name="Booking"
      component={BookingScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="book" size={30} color={focused ? '#16247d' : '#111'} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="face" size={30} color={focused ? '#16247d' : '#111'} />
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
        <Stack.Screen
          name="MainTab"
          component={MainTab} // This should lead to the tab navigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
