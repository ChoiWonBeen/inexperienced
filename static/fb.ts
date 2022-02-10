// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATTt2cJ8e2z-Gp4NscPuVLZvo3vo9EyEo",
  authDomain: "todo-it-6ccbb.firebaseapp.com",
  projectId: "todo-it-6ccbb",
  storageBucket: "todo-it-6ccbb.appspot.com",
  messagingSenderId: "368367500334",
  appId: "1:368367500334:web:e7d9a50051bd6c23daf3bf",
  measurementId: "G-87S7GR5V9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);