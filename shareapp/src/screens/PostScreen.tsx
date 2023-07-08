import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, Modal, TouchableOpacity } from 'react-native';
import { ref, onValue, set, get, child } from 'firebase/database';
import { database } from '../services/firebase/firebaseConfig';



interface Post {
  id: string;
  title: string;
  description: string;
  location: string;
}

const CreatePostScreen: React.FC<{ onSavePost: (post: Post) => void }> = ({ onSavePost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSavePost = () => {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      description,
      location,
    };
    onSavePost(newPost);
    setTitle('');
    setDescription('');
    setLocation('');
  };

  return (
    <View>
      <TextInput
        placeholder="Ingresar título de la publicación"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Ingresar descripción de la publicación"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Ingresar ubicación de la publicación"
        value={location}
        onChangeText={setLocation}
      />
      <Button color="#39558C" title="Guardar publicación" onPress={handleSavePost} />
    </View>
  );
};

const PostDetailsScreen: React.FC<{ post: Post; onDeletePost: () => void }> = ({ post, onDeletePost }) => {
  return (
    <View>
      <Text>Title: {post.title}</Text>
      <Text>Description: {post.description}</Text>
      <Text>Location: {post.location}</Text>
      <Button color="#39558C" title="Borrar publicación" onPress={onDeletePost} />
    </View>
  );
};

const ProductScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [usersData, setUsersData] = useState([]);


  useEffect(() => {
    
    const dbRef = ref(database);
    get(child(dbRef, `users/0}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const handleSavePost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
    setShowCreatePostModal(false);
  };

  const handleDeletePost = () => {
    if (selectedPost) {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== selectedPost.id));
      setSelectedPost(null);
    }
  };

  return (
    <View>
      <Button color="#39558C"  title="Crear publicación" onPress={() => setShowCreatePostModal(true)} />

      {posts.length > 0 && (
        <View style={{ margin: 10, padding: 10, backgroundColor: '#f0f0f0' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Publicaciones
          </Text>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={{width: '100%', height: 40, backgroundColor: '#39558C', borderRadius: 30, justifyContent: 'center'}} onPress={() => setSelectedPost(item)}>
                <View style={{ marginBottom: 10 }}>
                  <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <Modal visible={showCreatePostModal}>
        <CreatePostScreen onSavePost={handleSavePost} />
        <Button color="#39558C" title="Cerrar" onPress={() => setShowCreatePostModal(false)} />
      </Modal>

      <Modal visible={selectedPost !== null}>
        {selectedPost && (
          <View>
            <PostDetailsScreen post={selectedPost} onDeletePost={handleDeletePost} />
            <Button title="Cerrar" onPress={() => setSelectedPost(null)} />
          </View>
        )}
      </Modal>
    </View>
  );
};

export default ProductScreen;

