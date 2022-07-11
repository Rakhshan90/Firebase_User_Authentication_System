// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXJdr5PhLIM-TGYpMH855WOywBx_0uvfQ",
  authDomain: "react-authentication-db9de.firebaseapp.com",
  projectId: "react-authentication-db9de",
  storageBucket: "react-authentication-db9de.appspot.com",
  messagingSenderId: "757824910406",
  appId: "1:757824910406:web:0be82389c7df061c074647",
  measurementId: "G-JS3H43946J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;