// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkkvRr5UGPGhWNWPygkVuz3begweFckUs",
  authDomain: "first-project-48a41.firebaseapp.com",
  projectId: "first-project-48a41",
  storageBucket: "first-project-48a41.appspot.com",
  messagingSenderId: "682831252398",
  appId: "1:682831252398:web:745082a3bf0c5be3f9163f",
  measurementId: "G-HJ2RX1L28S"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
export { auth };
let googleProvider = new GoogleAuthProvider();
export { googleProvider };
let db = getFirestore(app);
export { db };
