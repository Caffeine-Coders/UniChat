import { initializeApp } from 'firebase/app';
// import app from '../../../../config';
// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
let app1
const firebaseConfig2 = {
  apiKey: "AIzaSyCJqfIb3Wdot0u0NTJunwTEmz9nOiDGdvw",
  authDomain: "unichat-ea4ea.firebaseapp.com",
  projectId: "unichat-ea4ea",
  storageBucket: "unichat-ea4ea.appspot.com",
  messagingSenderId: "34650469580",
  appId: "1:34650469580:web:0ae876e24fda478045fe69",
  measurementId: "G-MZJGL0DF2X"
};

// Initialize Firebase
app1 = initializeApp(firebaseConfig2,"app1");
export const auth2 = getAuth(app1)
export const db2 = getFirestore(app1)
// export const provider = new GoogleAuthProvider()

// const analytics = getAnalytics(app);
export default app1