import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async() => {
    try
    {
      const user = await signInWithEmailAndPassword(auth,email,password)
      navigation.navigate(("navegacion"))
    } catch(error){
      Alert.alert('Cuenta Erronea', 'Correo o contraseña incorrectos.', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const handleCreateAccount = () => {
    // Lógica para crear una cuenta
    navigation.navigate(("cuenta"))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FoodShare</Text>
      <Text style={styles.subtitulo}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
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
    marginTop:20,
    backgroundColor: '#39558C',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 10,
  },
  createAccountButton: {
    backgroundColor: '#000',
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