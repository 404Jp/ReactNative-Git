import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface UserInformationProps {
  fullName: string;
  email: string;
  password: string;
  Titulo: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  fullName,
  email,
  password,
  Titulo,
  }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const cerrarsesion = () =>{
  
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FoodShare</Text>
      <Text style={styles.title2}>Mi Cuenta</Text>

      <Text style={styles.subtitulo}>Nombre completo:</Text>
      <Text style={styles.text}>{fullName}</Text>

      <Text style={styles.subtitulo}>Correo electrónico:</Text>
      <Text style={styles.text}>{email}</Text>

      <Text style={styles.subtitulo}>Contraseña:</Text>
      <View style={styles.passwordContainer}>
        <Text style={styles.passwordText}>{showPassword ? password : '******'}</Text>
        <TouchableOpacity onPress={toggleShowPassword}>
          <Text style={styles.mostrarButton}>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={cerrarsesion}>
        <Text style={styles.cerrarsesion}>Cerrar Sesion</Text>
      </TouchableOpacity>
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
    marginLeft: 7,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 40,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordText: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
  },
  mostrarButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#39558C',
    borderRadius: 30,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
  },
  cerrarsesion: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#39558C',
    height: 30,
    borderRadius:30,
    color:'white',
  }
});

export default UserInformation;