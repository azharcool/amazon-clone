import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBivLMiO8UJjRVlhpl-P4CrhPPbqIbfmxU",
  authDomain: "new-clone-81aa8.firebaseapp.com",
  projectId: "new-clone-81aa8",
  storageBucket: "new-clone-81aa8.appspot.com",
  messagingSenderId: "468245234126",
  appId: "1:468245234126:web:65eb92af4d9ea1390cab9f",
  measurementId: "G-5EQH9RTKER",
});

const auth = firebase.auth();

export { auth };
