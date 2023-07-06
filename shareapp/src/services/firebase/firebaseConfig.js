// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTphnEM-ZdRFAYT4IyZr25u0Gu6BWA8Kc",
  authDomain: "sharefood-e70d5.firebaseapp.com",
  databaseURL: "https://sharefood-e70d5-default-rtdb.firebaseio.com",
  projectId: "sharefood-e70d5",
  storageBucket: "sharefood-e70d5.appspot.com",
  messagingSenderId: "642444055746",
  appId: "1:642444055746:web:1bcdeffc01ed71c8b0d75b",
  measurementId: "G-HF78104H1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export {database, auth}