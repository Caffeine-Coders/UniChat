import {initializeApp} from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAuUFSlygnKK7FU3WPGs0V-GecUd2oRMjc",
    authDomain: "unichat-d3231.firebaseapp.com",
    projectId: "unichat-d3231",
    storageBucket: "unichat-d3231.appspot.com",
    messagingSenderId: "390698529758",
    appId: "1:390698529758:web:bf0e6d924170633913634f",
    measurementId: "G-NLND6J49SD"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

export default app;