import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut, getRedirectResult } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwayUdvATn7_pnKvcMXu2k88uDFrTC_eI",
    authDomain: "expo-test-app-ea107.firebaseapp.com",
    projectId: "expo-test-app-ea107",
    storageBucket: "expo-test-app-ea107.appspot.com",
    messagingSenderId: "404117722850",
    appId: "1:404117722850:web:5f1b09f6fd0c62afb430bb",
    measurementId: "G-PVE77FXRK2"
  };

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
