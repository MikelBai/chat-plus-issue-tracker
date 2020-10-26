import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBX1u08qrp1C5a_vE-OaCpCcWGknJQUqhE",
    authDomain: "try-mern.firebaseapp.com",
    databaseURL: "https://try-mern.firebaseio.com",
    projectId: "try-mern",
    storageBucket: "try-mern.appspot.com",
    messagingSenderId: "896470504614",
    appId: "1:896470504614:web:c2e7147056a4b4f7c69067",
    measurementId: "G-ZPM8304RMK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;