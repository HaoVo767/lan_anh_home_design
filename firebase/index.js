// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtrZtIPzcs9hKVMHGIXCQ1vzmFgpOT4NE",
  authDomain: "lan-anh-home-design.firebaseapp.com",
  projectId: "lan-anh-home-design",
  storageBucket: "lan-anh-home-design.appspot.com",
  messagingSenderId: "232647192266",
  appId: "1:232647192266:web:a623e3fa3608cedb0ace33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// export default firebase;
