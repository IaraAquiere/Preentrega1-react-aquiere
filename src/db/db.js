import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBUIRziLbLZ-g95-mfZdTwl2XCTZ9v54Bg",
  authDomain: "proyecto-react-aquiere.firebaseapp.com",
  projectId: "proyecto-react-aquiere",
  storageBucket: "proyecto-react-aquiere.appspot.com",
  messagingSenderId: "1027281315179",
  appId: "1:1027281315179:web:90d8e610d2fdfecf2c582e"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db