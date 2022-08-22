import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChpOgCNBwnUQ9dJYzVKJmtxomvMoehAi8",
  authDomain: "clone-a9347.firebaseapp.com",
  databaseURL:
    "https://clone-a9347-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "clone-a9347",
  storageBucket: "clone-a9347.appspot.com",
  messagingSenderId: "452410267785",
  appId: "1:452410267785:web:07cc32b28cb13679f78e58",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
