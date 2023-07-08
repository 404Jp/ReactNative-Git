import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth } from '../services/firebase/firebaseConfig';

const UserScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.userInfoContainer}>
          <Text style={styles.title}>Sesión iniciada:</Text>
          <Text>Email: {user.email}</Text>
          <Text>Tipo de autentificación: {user.providerData[0].providerId}</Text>
        </View>
      ) : (
        <Text style={styles.title}>No hay usuario logueado.</Text>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Objetivo Food Share</Text>
        <Text>
          Compartir alimentos excedentes, reducir el desperdicio de alimentos y aprovechar los recursos de manera más eficiente, alentando la colaboración y la solidaridad en la comunidad.
        </Text>
        <Text style={styles.title}>¿Cómo crear una Publicación?</Text>
        <Text>
          Ingresa a la sección de Publicar Comida para crear una publicación. Agrega un Título, una Descripción y la longitud y latitud donde se encuentra el lugar físico donde se está regalando la comida.
        </Text>
        <Text style={styles.title}>¿Cómo Ver una Publicación?</Text>
        <Text>
          Ingresa a la sección de Mapa donde se mostrara todas publicaciones de los usuarios.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#39558C',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  infoContainer: {
    alignItems: 'center',
  },
});

export default UserScreen;
