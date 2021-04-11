import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: (process.env.REACT_APP_FIREBASE_APIKEY =
    "AIzaSyBtFUxZ7ZhXjNLx1y2i52XBOEoUzDPtuts"),
  authDomain: (process.env.REACT_APP_FIREBASE_DOMAIN =
    "ts-matching-app-72723.firebaseapp.com"),
  databaseURL: (process.env.REACT_APP_FIREBASE_DATABASE =
    "https://ts-matching-app-72723.firebaseio.com"),
  projectId: (process.env.REACT_APP_FIREBASE_PROJECT_ID =
    "ts-matching-app-72723"),
  storageBucket: (process.env.REACT_APP_FIREBASE_STORAGE_BUCKET =
    "ts-matching-app-72723.appspot.com"),
  messagingSenderId: (process.env.REACT_APP_FIREBASE_SENDER_ID =
    "816244612435"),
  appId: (process.env.REACT_APP_FIREBASE_APP_ID =
    "1:816244612435:web:787f083bfe207a4c0a55a6"),
  measurementId: (process.env.REACT_APP_FIREBASE_MEASUREMENT_ID =
    "G-GH4KZ0WVS6"),
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
