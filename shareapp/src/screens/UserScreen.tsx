import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserInformationProps {
  fullName: string;
  email: string;
  password: string;
  Titulo: string
}

const UserInformation: React.FC<UserInformationProps> = ({ fullName, email, password, Titulo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FoodShare</Text>
      <Text style={styles.title2}>Mi Cuenta</Text>

      <Text style={styles.subtitulo}>Nombre completo:</Text>
      <Text style={styles.text}>{fullName}</Text>

      <Text style={styles.subtitulo}>Correo electrónico:</Text>
      <Text style={styles.text}>{email}</Text>

      <Text style={styles.subtitulo}>Contraseña:</Text>
      <Text style={styles.text}>{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subtitulo: {
    marginBottom: 5,
    marginLeft:7,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight:'bold',
    color: 'gray',
    marginBottom: 40,
  },
  correo: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  contraseña: {
    fontSize: 16,
    fontWeight: 'bold',

  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight:'bold',
    color: '#39558C',
    marginTop:10,
  }
});

export default UserInformation;