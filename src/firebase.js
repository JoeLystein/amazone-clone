import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHgxSlWsYWg1kSF9Uy-WtOynn-b7xxE4w",
    authDomain: "clone-65178.firebaseapp.com",
    databaseURL: "https://clone-65178.firebaseio.com",
    projectId: "clone-65178",
    storageBucket: "clone-65178.appspot.com",
    messagingSenderId: "820690849407",
    appId: "1:820690849407:web:5bc139d3b43288e45f394a",
    measurementId: "G-XKQCGFX7VN"

})
// const db = firebase.firestore();
const auth = firebase.auth(); 

export {auth}; 