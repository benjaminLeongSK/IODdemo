import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD9Y0hUaZz4JAgc1o0jnFmwZ4zqKAomY0Q",
  authDomain: "miniproj2-1e0ac.firebaseapp.com",
  projectId: "miniproj2-1e0ac",
  storageBucket: "miniproj2-1e0ac.appspot.com",
  messagingSenderId: "530794432692",
  appId: "1:530794432692:web:6d08d33613fc8dca386fe1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };