import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBueKLOFXhyylE2F4TO8ffPq7uKiAvlvQg",
    authDomain: "k-clothing-db.firebaseapp.com",
    projectId: "k-clothing-db",
    storageBucket: "k-clothing-db.appspot.com",
    messagingSenderId: "175266869028",
    appId: "1:175266869028:web:1ecb24be026d486540cdb1",
    measurementId: "G-45W3N0SFZP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;