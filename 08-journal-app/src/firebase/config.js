// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBofTiFJRulGisxHfH3L5I7mYN78n9BvYQ",
  authDomain: "journal-app-54b7b.firebaseapp.com",
  projectId: "journal-app-54b7b",
  storageBucket: "journal-app-54b7b.appspot.com",
  messagingSenderId: "174014019281",
  appId: "1:174014019281:web:7bd8b373fb89412eb077f0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp )