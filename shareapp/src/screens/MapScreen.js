import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { database } from '../services/firebase/firebaseConfig';

export default function MapScreen() {
  const [location, setLocation] = useState({ lat: '', log: '' });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const postRef = ref(database, 'Users/User1/post');
    onValue(postRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setLocation(data.location);
        setTitle(data.title);
        setDescription(data.description);
      }
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>MapScreen</Text>
      <Text>Location </Text>
      <Text>latitude: {location.latitude}</Text>
      <Text>longitude: {location.longitude}</Text>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
    </SafeAreaView>
  );
}
