// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCusNvCnz1hFv8do14TSAepE-0HJjbOMkc",
  authDomain: "sharefood-beta-20231.firebaseapp.com",
  databaseURL: "https://sharefood-beta-20231-default-rtdb.firebaseio.com",
  projectId: "sharefood-beta-20231",
  storageBucket: "sharefood-beta-20231.appspot.com",
  messagingSenderId: "475833819231",
  appId: "1:475833819231:web:11c2b64149eef48a19fbea",
  measurementId: "G-ZB3QCMR5TB",
  databaseURL: "https://sharefood-beta-20231-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database} 