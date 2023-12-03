// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHyr4wwVoADWqpBKBjmZZNUZAEFQ4-I6s",
  authDomain: "my-first-a2a45.firebaseapp.com",
  projectId: "my-first-a2a45",
  storageBucket: "my-first-a2a45.appspot.com",
  messagingSenderId: "902008711440",
  appId: "1:902008711440:web:7c81edf27f09d0a3b69d95",
  measurementId: "G-LML3JM09S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);