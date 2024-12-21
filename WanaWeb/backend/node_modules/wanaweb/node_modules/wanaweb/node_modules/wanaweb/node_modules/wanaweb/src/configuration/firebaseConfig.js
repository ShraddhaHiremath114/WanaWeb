// Import the Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcRk2BSssWCGDHuYgznIiyUb8EgaIa_as",
  authDomain: "wana-bdca1.firebaseapp.com",
  databaseURL: "https://wana-bdca1-default-rtdb.firebaseio.com",
  projectId: "wana-bdca1",
  storageBucket: "wana-bdca1.appspot.com",
  messagingSenderId: "497661880283",
  appId: "1:497661880283:web:de294ed036ad14f73fe9fe",
  measurementId: "G-24YDCS9RVM"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
