import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7FGoE1gI22La3GaR5VdjvxF4qCnUm__4",
  authDomain: "photo-tagging-app-67127.firebaseapp.com",
  projectId: "photo-tagging-app-67127",
  storageBucket: "photo-tagging-app-67127.appspot.com",
  messagingSenderId: "448683719604",
  appId: "1:448683719604:web:872b226cb86ccfe8e210e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get database
const db = getFirestore(app);

export default db
