// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB-GxQvlA5MPDQysqkWmzX5ytafK9awx2o",
  authDomain: "fir-aa286.firebaseapp.com",
  projectId: "fir-aa286",
  storageBucket: "fir-aa286.appspot.com",
  messagingSenderId: "185979829434",
  appId: "1:185979829434:web:5eef331e7e9d0037695683",
  measurementId: "G-EXRHKQHWW4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
