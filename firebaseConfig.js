import Firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5TZdTPqE2cfAoGo2PdPG1hyxc1B85WKs",
    authDomain: "pizza-planet-3cf12.firebaseapp.com",
    databaseURL: "https://pizza-planet-3cf12.firebaseio.com",
    projectId: "pizza-planet-3cf12",
    storageBucket: "",
    messagingSenderId: "729526935680",
    appId: "1:729526935680:web:37a61b4dd03ab649"
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export const dbMenuRef = db.ref('menu');
export const dbOrdersRef = db.ref('orders');