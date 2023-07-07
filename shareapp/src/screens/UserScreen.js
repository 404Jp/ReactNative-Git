import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { auth, database } from '../services/firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';
const UserScreen = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);

      // Obtener datos del usuario utilizando el email como referencia
      const usersRef = ref(database, 'Users');
      onValue(usersRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const user = Object.values(data).find(
            (userData) => userData.email === currentUser.email
          );
          setUserData(user);
        }
      });
    }
  }, []);

  return (
    <View>
      {user && userData ? (
        <View>
          <Text>Email: {userData.email}</Text>
          <Text>Nombre: {userData.name}</Text>
          <Text>Edad: {userData.age}</Text>
          <Text>Publicación:</Text>
          <Text>Título: {userData.post.title}</Text>
          <Text>Descripción: {userData.post.description}</Text>
          <Text>Ubicación:</Text>
          <Text>Latitud: {userData.post.location.latitude}</Text>
          <Text>Longitud: {userData.post.location.longitude}</Text>
        </View>
      ) : (
        <Text>Sin usuario.</Text>
      )}
    </View>
  );
};

export default UserScreen;
