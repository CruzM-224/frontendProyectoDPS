import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });
  const router = useRouter();

  const validateInputs = () => {
    let emailError = '';
    let passwordError = '';
    let usernameError = '';

    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim()) {
      emailError = 'Email is required';
    } else if (!emailRegex.test(email)) {
      emailError = 'Invalid email format';
    }

    const UserRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/;
    if (!username.trim()) {
      usernameError = 'Username is required';
    } else if (!UserRegex.test(username)) {
      usernameError = 'Password must contain at least one uppercase letter and one non-letter character';
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/;
    if (!password.trim()) {
      passwordError = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      passwordError = 'Password must contain at least one uppercase letter and one non-letter character';
    }

    setErrors({email: emailError, username: usernameError, password: passwordError});

    if (!emailError && !passwordError && !usernameError) {
      alert('Logging in...');
      router.replace('/(tabs)/home');
    }


  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>
        Enter your credentials to create an account
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>e-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      </View>

        <TouchableOpacity style={styles.button} onPress={validateInputs}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account?{' '}
      </Text>

      <Link href="/(login)/signIn" asChild>
      <TouchableOpacity>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#DB4444',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
  },
  footerLink: {
    color: 'blue',
  },
  signInText: {
    color: '#DB4444',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpScreen;