// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiQoizGpwczRAbB1_-TB9dPBoGSaC-NXA",
  authDomain: "linkedin-clone-4b424.firebaseapp.com",
  projectId: "linkedin-clone-4b424",
  storageBucket: "linkedin-clone-4b424.appspot.com",
  messagingSenderId: "890965318718",
  appId: "1:890965318718:web:bbc70e3d4da02ad738056f",
  measurementId: "G-B8Q2VYF4KM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
