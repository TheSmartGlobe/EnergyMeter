import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCRq7UVO9t85qvo6P5hyNKYxdo0YblrRSo",
  authDomain: "energymeter-948be.firebaseapp.com",
  //databaseURL: "https://energymeter-948be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "energymeter-948be",
  storageBucket: "energymeter-948be.appspot.com",
  messagingSenderId: "51698310461",
  appId: "1:51698310461:web:5c1c89a98ba9ef5e89b954",
  measurementId: "G-YNQD1D1CQ5"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


// Detect auth state
onAuthStateChanged(auth, user{)