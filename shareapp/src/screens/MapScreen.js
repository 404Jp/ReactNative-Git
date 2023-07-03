import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ref, onValue } from 'firebase/database';
import { database } from '../services/firebase/firebaseConfig';
const markerImage = require('../img/icon.png');

export default function MapScreen() {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
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
    <SafeAreaView style={{ flex: 1 }}>
      <Text>MapScreen</Text>
      <View style={{ flex: 1 }}>
        {location.latitude && location.longitude ? (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: parseFloat(location.latitude),
              longitude: parseFloat(location.longitude),
              latitudeDelta: parseFloat(location.latitudeDelta),
              longitudeDelta:  parseFloat(location.longitudeDelta),
            }}
          >
            <Marker
              coordinate={{
                latitude: parseFloat(location.latitude),
                longitude: parseFloat(location.longitude),
              }}
              title={title}
              description={description}
              image={markerImage}
              imageStyle={{ width: 5, height: 5 }} 
              
            />
          </MapView>
        ) : (
          <Text>Cargando Mapa...</Text>
        )}
      </View>
      <Text>Location:</Text>
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
    </SafeAreaView>
  );
}
