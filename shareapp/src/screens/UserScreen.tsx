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
      <Text style={styles.text}>{Titulo}</Text>

      <Text style={styles.nombre}>Nombre completo:</Text>
      <Text style={styles.text}>{fullName}</Text>

      <Text style={styles.correo}>Correo electrónico:</Text>
      <Text style={styles.text}>{email}</Text>

      <Text style={styles.contraseña}>Contraseña:</Text>
      <Text style={styles.text}>{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  nombre: {

  },
  correo: {

  },
  contraseña: {

  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight:'bold',
    color: '#39558C',
    marginVertical:10,
  }
});

export default UserInformation;