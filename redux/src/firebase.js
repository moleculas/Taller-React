import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCdQLGJERiiXVMRXSrdwbNrkHRnzgCmJJQ",
    authDomain: "crud-udemy-react-31eea.firebaseapp.com",
    projectId: "crud-udemy-react-31eea",
    storageBucket: "crud-udemy-react-31eea.appspot.com",
    messagingSenderId: "740058826216",
    appId: "1:740058826216:web:099937077194fc0256d05d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  export {auth, firebase}