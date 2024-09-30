import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PrincipalLogin= () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/Logotipo-UDB-Tech-shop.png')} // replace with your logo path
        style={styles.logo}
      />
      
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to our store</Text>
      
      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      
      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100, // adjust as needed
    height: 100, // adjust as needed
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DB4444', // red color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrincipalLogin;
