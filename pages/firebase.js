import firebase from "firebase/app";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHqbb5YNwDri5l5www81L226uAzE9qKFg",
  authDomain: "tesla-clone-442e1.firebaseapp.com",
  projectId: "tesla-clone-442e1",
  storageBucket: "tesla-clone-442e1.firebasestorage.app",
  messagingSenderId: "932881239975",
  appId: "1:932881239975:web:f6754eb9d8cf027a58f082",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Initialize Firebase services
firebase.initializeApp(config)
const db = firebase.firestore()
const auth = getAuth(app);

export { auth, db };
