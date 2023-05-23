import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRAdcKCOrtQ0b0XVu-Gq55HG9sYLFFhRs",
  authDomain: "upbringing-31259.firebaseapp.com",
  projectId: "upbringing-31259",
  storageBucket: "upbringing-31259.appspot.com",
  messagingSenderId: "199744153619",
  appId: "1:199744153619:web:46f01b44234ca4fdb337e6",
  measurementId: "G-R0F9SEKYH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
// const analytics = getAnalytics(app);