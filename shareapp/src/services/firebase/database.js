import { database } from './firebaseConfig';
import { ref, onValue } from 'firebase/database';

let userData = {};

const readUserData = () => {
  const userRef = ref(database, 'Users/User1');
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    userData = {
      name: data.name,
      age: data.age,
    };
  });
};

const mapPostData = () => {
  const postRef = ref(database, 'Users/User1/post');
  onValue(postRef, (snapshot) => {
    const data = snapshot.val();
    console.log('Location:', data.location);
    console.log('Title:', data.title);
    console.log('Description:', data.description);
  });
};

export { readUserData, userData, mapPostData };
