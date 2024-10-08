// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nxsExci70eeld-0H_cQn5QME8tj-tRU",
  authDomain: "my-app-my123.firebaseapp.com",
  projectId: "my-app-my123",
  storageBucket: "my-app-my123.appspot.com",
  messagingSenderId: "494778972603",
  appId: "1:494778972603:web:5644bd62972534761fac9e",
  measurementId: "G-2BB2HNPMJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export {database}