// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1KxIgkNs9bdBSJ4uYJrBB63oVrR8OiBk",
  authDomain: "prepify-f4380.firebaseapp.com",
  projectId: "prepify-f4380",
  storageBucket: "prepify-f4380.firebasestorage.app",
  messagingSenderId: "338191865054",
  appId: "1:338191865054:web:12cee340ab7160500b1e4f",
  measurementId: "G-MEXWE0JNFJ"
};

// Initialize Firebase
const app = ! getApps.length ? initializeApp(firebaseConfig) :getApp() ;

export const auth = getAuth(app);
export const db = getFirestore(app)