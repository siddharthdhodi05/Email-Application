// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzeJova3j_t9q0hP_jvA90W4VZvjyGHm8",
  authDomain: "email-application-9bf74.firebaseapp.com",
  projectId: "email-application-9bf74",
  storageBucket: "email-application-9bf74.appspot.com",
  messagingSenderId: "176052132604",
  appId: "1:176052132604:web:253a5e34d9d10424395579",
  measurementId: "G-W4DNL1JC80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth()
export const Provider = new GoogleAuthProvider()