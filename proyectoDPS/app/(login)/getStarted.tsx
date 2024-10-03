import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Texto superior */}
      <Text style={styles.title}>Get every tech supply you need</Text>

      {/* Botón de Crear cuenta */}
      <Link href="/(login)/signUp" asChild>
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
      </Link>

      {/* Texto de conectarse con redes sociales */}
      <Text style={styles.socialText}>Connect with social media</Text>

      {/* Botón de Google */}
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.iconTextContainer}>
          <Image
            source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png' }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>

      {/* Botón de Facebook */}
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.iconTextContainer}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  createAccountButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 20,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialText: {
    color: '#808080',
    fontSize: 14,
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#FF4D4D',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
