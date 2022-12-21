import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHufixGzYz7gbanI7TUjIGzPihWMIPn78",
  authDomain: "chatapp-365c2.firebaseapp.com",
  projectId: "chatapp-365c2",
  storageBucket: "chatapp-365c2.appspot.com",
  messagingSenderId: "1013092125286",
  appId: "1:1013092125286:web:8e0ddccf2c0d19b179fba7",
  measurementId: "G-H3LDETMLC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);