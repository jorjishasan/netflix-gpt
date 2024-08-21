// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7j8RiBu0NmoxL9ULJHjiyyzfFVSaYHf0",
  authDomain: "netflixgpt-32137.firebaseapp.com",
  projectId: "netflixgpt-32137",
  storageBucket: "netflixgpt-32137.appspot.com",
  messagingSenderId: "506203589858",
  appId: "1:506203589858:web:d788b09e10bcb12acf62bb",
  measurementId: "G-042DT010BM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
