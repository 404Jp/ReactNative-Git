import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ref, onValue } from 'firebase/database';
import { database } from '../services/firebase/firebaseConfig';
const markerImage = require('../img/icon.png');

export default function MapScreen() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, 'Users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const users = Object.values(data).map((userData) => ({
          location: userData.post.location,
          title: userData.post.title,
          description: userData.post.description,
        }));
        setUsersData(users);
      }
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        {usersData.length > 0 ? (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: parseFloat(usersData[0].location.latitude),
              longitude: parseFloat(usersData[0].location.longitude),
              latitudeDelta: parseFloat(usersData[0].location.latitudeDelta),
              longitudeDelta: parseFloat(usersData[0].location.longitudeDelta),
            }}
          >
            {usersData.map((userData, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(userData.location.latitude),
                  longitude: parseFloat(userData.location.longitude),
                }}
                title={userData.title}
                description={userData.description}
                image={markerImage}
                imageStyle={{ width: 5, height: 5 }}
              />
            ))}
          </MapView>
        ) : (
          <Text>Cargando Mapa...</Text>
        )}
      </View>
    </SafeAreaView>
  );
}


/* Para probar datos sin console log 
  {usersData.map((userData, index) => (
        <View key={index}>
          <Text>Location:</Text>
          <Text>Latitude: {userData.location.latitude}</Text>
          <Text>Longitude: {userData.location.longitude}</Text>
          <Text>Title: {userData.title}</Text>
          <Text>Description: {userData.description}</Text>
        </View>
      ))}
*/