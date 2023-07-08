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
  apiKey: "AIzaSyC9lIvmbCKayd_VQL2RE2ogysmxP6odOYk",
  authDomain: "appsharefood-c8c90.firebaseapp.com",
  databaseURL: "https://appsharefood-c8c90-default-rtdb.firebaseio.com",
  projectId: "appsharefood-c8c90",
  storageBucket: "appsharefood-c8c90.appspot.com",
  messagingSenderId: "646402935251",
  appId: "1:646402935251:web:0406f7a120e3d1410b0726",
  measurementId: "G-7DE05HMMKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export {database, auth}