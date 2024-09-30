import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const VerificationScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.backgroundImage}
        blurRadius={5}
      >

        <View style={styles.overlay} />
        <View style={styles.logoContainer}>

          <Image
            source={require('../assets/logo.png')}
            style={{ opacity: 1 }}
          />
        </View>

        <View style={styles.content}>
        <Text style={styles.verificationTitle}>Verification</Text>
        <Text style={styles.subTitle}>We’ve sent you an OTP code.{"\n"}Please enter the code below.</Text>

        {/* OTP Input */}
        <OTPInputView
          style={styles.otpContainer}
          pinCount={6}
          codeInputFieldStyle={styles.otpInput}
          codeInputHighlightStyle={styles.otpInputHighlight}
        />

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>

       
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    width: '100%',
    height: '100%',
  },
  
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 200, 
  },
  
  confirmButton: {
    backgroundColor: '#3399FF',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  verificationTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
  },
  otpContainer: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    color: '#000',
    fontSize: 20,
  },
  otpInputHighlight: {
    borderColor: '#007AFF',
  },
 
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerificationScreen;