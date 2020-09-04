import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyC5TZdTPqE2cfAoGo2PdPG1hyxc1B85WKs",
    authDomain: "pizza-planet-3cf12.firebaseapp.com",
    databaseURL: "https://pizza-planet-3cf12.firebaseio.com",
    projectId: "pizza-planet-3cf12",
    storageBucket: "pizza-planet-3cf12.appspot.com",
    messagingSenderId: "729526935680",
    appId: "1:729526935680:web:37a61b4dd03ab649"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

export const dbMenuRef = db.collection("menu");
export const dbOrdersRef = db.collection("orders");
// export const dbOrdersRef = db.collection("orders");
export const firebaseAuth = firebase.auth();