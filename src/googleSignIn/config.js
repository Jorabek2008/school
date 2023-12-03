import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBkKgTgYyD7Q7w6IcsV6-LeZ03uoZgmht4",
  authDomain: "multi-shop-46c2b.firebaseapp.com",
  projectId: "multi-shop-46c2b",
  storageBucket: "multi-shop-46c2b.appspot.com",
  messagingSenderId: "208957829637",
  appId: "1:208957829637:web:ea6b51bcac9d786c75a26c",
  measurementId: "G-CW4R5S2CK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
// export {auth,provider}
export const db = getFirestore(app)