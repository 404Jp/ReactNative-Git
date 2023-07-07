import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
    <View>
      {user ? (
        <Text>{JSON.stringify(user, null, 2)}</Text>
      ) : (
        <Text>Sin usuario.</Text>
      )}
    </View>
  );
};

export default UserScreen;
