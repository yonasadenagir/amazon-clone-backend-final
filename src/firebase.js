import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm4HyiLRCe8wvUbP6SOsPNwfomQPQ6_ik",
  authDomain: "clone-yonas.firebaseapp.com",
  projectId: "clone-yonas",
  storageBucket: "clone-yonas.appspot.com",
  messagingSenderId: "295870989525",
  appId: "1:295870989525:web:d307c6468e3ada5009ce5c",
  measurementId: "G-TRQ59N30P8",
};
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
export default firebase;
