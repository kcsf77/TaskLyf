import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screens/FirstPage';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/Signup';
import VerificationScreen from './screens/Verification';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={FirstScreen}   />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Verify" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}  