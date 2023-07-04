import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica para iniciar sesión
    console.log('Iniciar sesión con email:', email, 'y contraseña:', password);
    
  };

  const handleForgotPassword = () => {
    // Lógica para recuperar contraseña
    console.log('Recuperar contraseña');
  };

  const handleCreateAccount = () => {
    // Lógica para crear una cuenta
    console.log('Crear cuenta');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FoodShare</Text>
      <Text style={styles.subtitulo}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
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
  },
  heading: {
    fontSize: 40,
    fontWeight:'bold',
    color: '#39558C',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    borderRadius: 30,
    marginTop: 10,
    paddingStart: 30,
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#000',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 10,
  },
  createAccountButton: {
    backgroundColor: '#39558C',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
  },
});