// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRv_BDltbBdt1OjI9Zce1Zcspd6Kf3sRQ",
  authDomain: "react-app-18dc4.firebaseapp.com",
  projectId: "react-app-18dc4",
  storageBucket: "react-app-18dc4.appspot.com",
  messagingSenderId: "643915239622",
  appId: "1:643915239622:web:ac77cc26a92259bf2487c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
