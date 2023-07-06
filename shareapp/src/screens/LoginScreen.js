import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebase/firebaseConfig';
import { createUserWithEmailAndPassword} from 'firebase/auth';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleCreateAccount = async() => {
      const credentialuser = await createUserWithEmailAndPassword(auth,email,password)
    navigation.navigate(("Login"))
  };

  const volver = () => {
    navigation.navigate(("Login"))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FoodShare</Text>
      <Text style={styles.subtitulo}>Crear Cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
        keyboardType="default"
        autoCapitalize="none"
      />
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
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.volverbutton} onPress={volver}>
        <Text style={styles.buttonText}>Volver</Text>
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
  volverbutton: {
    marginTop: 10,
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
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
    marginTop: 20,
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