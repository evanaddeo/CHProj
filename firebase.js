import firebase from "firebase/app";
import {initializeApp} from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';

// SDKs for Firebase products to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDN9C2RQqXjBWV4lldd8OkVQ_X_CWeqPDM",
  authDomain: "dawgbytes-84378.firebaseapp.com",
  projectId: "dawgbytes-84378",
  storageBucket: "dawgbytes-84378.appspot.com",
  messagingSenderId: "718148906953",
  appId: "1:718148906953:web:f07bd1a1d12d2da1d40218",
  measurementId: "G-MW95YGDP5M"             // measurementId is optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  

export default firebase;

