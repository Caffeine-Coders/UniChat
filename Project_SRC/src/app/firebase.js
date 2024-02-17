import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJqfIb3Wdot0u0NTJunwTEmz9nOiDGdvw",
  authDomain: "unichat-ea4ea.firebaseapp.com",
  projectId: "unichat-ea4ea",
  storageBucket: "unichat-ea4ea.appspot.com",
  messagingSenderId: "34650469580",
  appId: "1:34650469580:web:0ae876e24fda478045fe69",
  measurementId: "G-MZJGL0DF2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
export default app