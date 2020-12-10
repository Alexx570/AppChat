import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmIgzsLO2ThgmzAzo7OzKkVX8Uo2SAkBI",
    authDomain: "appchat-9453f.firebaseapp.com",
    databaseURL: "https://appchat-9453f.firebaseio.com",
    projectId: "appchat-9453f",
    storageBucket: "appchat-9453f.appspot.com",
    messagingSenderId: "577787690607",
    appId: "1:577787690607:web:47ecd2363c66fa7ceb179a"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);