import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import useStore from '../../components/useStore';

const SignUpScreen = () => {
  const router = useRouter();
  const registerUser = useStore((state) => state.registerUser); // Extraemos el método de registro del store

  // Definimos el estado para todos los campos necesarios
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dui, setDui] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = async () => {
    let validationErrors = {};

    // Validar los campos
    if (!nombre.trim()) {
      validationErrors.nombre = 'Nombre es requerido';
    }
    if (!apellido.trim()) {
      validationErrors.apellido = 'Apellido es requerido';
    }
    // Validar el campo DUI
    if (!dui.trim()) {
      validationErrors.dui = 'DUI es requerido';
    } else if (!/^\d{10}$/.test(dui)) {
      validationErrors.dui = 'DUI debe contener exactamente 9 dígitos';
    }
    if (!telefono.trim()) {
      validationErrors.telefono = 'Teléfono es requerido';
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim()) {
      validationErrors.email = 'Email es requerido';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Formato de email inválido';
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/;
    if (!password.trim()) {
      validationErrors.password = 'Contraseña es requerida';
    } else if (!passwordRegex.test(password)) {
      validationErrors.password = 'La contraseña debe contener al menos una letra mayúscula y un carácter no alfabético';
    }
    if (!direccion.trim()) {
      validationErrors.direccion = 'Dirección es requerida';
    }

    setErrors(validationErrors);

    // Si no hay errores, proceder al registro
    if (Object.keys(validationErrors).length === 0) {
      const result = await registerUser(nombre, apellido, dui, telefono, email, password, direccion);
      console.log(result);
      router.replace("/(tabs)/home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.subtitle}>Ingresa tus credenciales para crear una cuenta</Text>
      
      {/* Nombre */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        {errors.nombre && <Text style={styles.errorText}>{errors.nombre}</Text>}
      </View>

      {/* Apellido */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apellido</Text>
        <TextInput
          style={styles.input}
          value={apellido}
          onChangeText={setApellido}
        />
        {errors.apellido && <Text style={styles.errorText}>{errors.apellido}</Text>}
      </View>

      {/* DUI */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>DUI</Text>
        <TextInput
          style={styles.input}
          value={dui}
          onChangeText={setDui}
          keyboardType="numeric" // Asegura que solo se ingresen números
        />
        {errors.dui && <Text style={styles.errorText}>{errors.dui}</Text>}
      </View>

      {/* Teléfono */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad" // Muestra el teclado de números
        />
        {errors.telefono && <Text style={styles.errorText}>{errors.telefono}</Text>}
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>

      {/* Contraseña */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      </View>

      {/* Dirección */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dirección</Text>
        <TextInput
          style={styles.input}
          value={direccion}
          onChangeText={setDireccion}
        />
        {errors.direccion && <Text style={styles.errorText}>{errors.direccion}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={validateInputs}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>¿Ya tienes una cuenta?{' '}</Text>

      <Link href="/(login)/signIn" asChild>
        <TouchableOpacity>
          <Text style={styles.signInText}>Iniciar sesión</Text>
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
