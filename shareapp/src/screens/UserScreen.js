import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth } from '../services/firebase/firebaseConfig';

const ProfileScreen = () => {
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
        <View>
          
           <Text>Sesión iniciada:</Text>
          <Text>Email: {user.email}</Text>
          <Text>Tipo de autentificacion: {user.providerData[0].providerId}</Text>
        </View>
      ) : (
        <Text>No hay usuario logueado.</Text>
      )}
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
});

export default ProfileScreen;
