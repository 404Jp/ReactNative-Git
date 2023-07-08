import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ref, onValue } from 'firebase/database';
import { database } from '../services/firebase/firebaseConfig';
const markerImage = require('../img/icon.png');

export default function MapScreen() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const postsRef = ref(database, 'post');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const posts = Object.values(data).map((postData) => ({
          location: postData.location,
          title: postData.title,
          description: postData.description,
        }));
        setPostsData(posts);
      }
    });
  }, []);
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {postsData.length > 0 ? (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: parseFloat(postsData[0].location.latitude),
              longitude: parseFloat(postsData[0].location.longitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {postsData.map((postData, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(postData.location.latitude),
                  longitude: parseFloat(postData.location.longitude),
                }}
                title={postData.title}
                description={postData.description}
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
