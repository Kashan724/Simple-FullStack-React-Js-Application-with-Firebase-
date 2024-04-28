// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADFuUY9o6pi7sFmbtp7A8bQCGKAHo6Pj8",
  authDomain: "react-firebase-46f15.firebaseapp.com",
  projectId: "react-firebase-46f15",
  storageBucket: "react-firebase-46f15.appspot.com",
  messagingSenderId: "979182985000",
  appId: "1:979182985000:web:bafe680cab8520cd653a1d",
  measurementId: "G-KY48MZHQTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export const db = getFirestore(app);
export const storage = getStorage(app);