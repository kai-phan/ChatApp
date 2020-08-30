import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKoho4dO0oInd1BpTXaOWSLQMFcvdxo8A",
    authDomain: "whatsapp-clone-352bc.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-352bc.firebaseio.com",
    projectId: "whatsapp-clone-352bc",
    storageBucket: "whatsapp-clone-352bc.appspot.com",
    messagingSenderId: "125677183639",
    appId: "1:125677183639:web:1018564f60fcea3bf3ffd2",
    measurementId: "G-P9ZND5ERM3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, Provider};
export default db;  