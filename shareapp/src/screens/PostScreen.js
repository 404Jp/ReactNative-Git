import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import { auth, database } from '../services/firebase/firebaseConfig';
import { ref, push, remove, onValue } from 'firebase/database';

const PostScreen = ({ user }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);

  const currentUser = auth.currentUser;

  useEffect(() => {
    const postsRef = ref(database, 'post');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userPosts = Object.values(data).filter((post) => post.email === currentUser.email);
        setPosts(userPosts);
      }
    });
  }, []);

  const handleCreatePost = () => {
    const newPost = {
      title,
      description,
      location: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      email: currentUser.email,
    };

    const postRef = ref(database, 'post');
    push(postRef, newPost)
      .then(() => {
        setTitle('');
        setDescription('');
        setLatitude('');
        setLongitude('');
        setMessage('Publicación creada exitosamente.');
      })
      .catch((error) => {
        console.error('Error creando post:', error);
      });
  };

  const handleDeletePost = () =>{
    const postRef = ref(database, `post/-NZnLafj43qh5TwBx1pw`);
    remove(postRef)
    .then(() => {
      setMessage('Publicación eliminada exitosamente.');
    })
    .catch((error) => {
      console.error('Error eliminando la publicación:', error);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Latitud"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        style={styles.input}
        placeholder="Longitud"
        value={longitude}
        onChangeText={setLongitude}
      />
      <View style={styles.buttonContainer}>
        <Button title="Crear Publicación" onPress={handleCreatePost} />
      </View>
      <Text style={styles.postTitle}>Mis Publicaciones</Text>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDescription}>{item.description}</Text>
            <Text style={styles.postLocation}>
              Latitud: {item.location.latitude}, Longitud: {item.location.longitude}
            </Text>
            <Button title='Eliminar publicación' onPress={handleDeletePost}/>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    color: '#39558C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  message: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
  postContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    marginBottom: 5,
  },
  postLocation: {
    fontStyle: 'italic',
  }
});

export default PostScreen;