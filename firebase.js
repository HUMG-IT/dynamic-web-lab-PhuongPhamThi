import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWHYeAMKQKgqYrowdBthVX1LRsNcf2-J0",
  authDomain: "dynamic-login-3c052.firebaseapp.com",
  databaseURL: "https://dynamic-login-3c052-default-rtdb.firebaseio.com",
  projectId: "dynamic-login-3c052",
  storageBucket: "dynamic-login-3c052.firebasestorage.app",
  messagingSenderId: "615874174732",
  appId: "1:615874174732:web:c28a822958fa5c19a97329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };