import { initializeApp } from 'firebase/app';
import 'firebase/auth';
var apiKey = process.env.NEXT_PUBLIC_AUTH_APIKEY;
var authDomain = process.env.NEXT_PUBLIC_AUTH_AUTHDOMAIN;
var projectId = process.env.NEXT_PUBLIC_AUTH_PROJECTID;
var storageBucket = process.env.NEXT_PUBLIC_AUTH_STORAGEBUCKET;
var messagingSenderId = process.env.NEXT_PUBLIC_AUTH_MESSAGINGSENDERID;
var appId = process.env.NEXT_PUBLIC_AUTH_APPID;
var measurementId = process.env.NEXT_PUBLIC_AUTH_MEASUREMENTID;

const firebaseConfig = {
  apiKey:  apiKey,
  authDomain:  authDomain,
  projectId:  projectId,
  storageBucket:  storageBucket,
  messagingSenderId:  messagingSenderId,
  appId:  appId,
  measurementId:  measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;