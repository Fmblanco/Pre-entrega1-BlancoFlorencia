import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBqhz3TxtcektqfyZrG6fFsPIyC4JlZoGA",
  authDomain: "tienda-boah.firebaseapp.com",
  projectId: "tienda-boah",
  storageBucket: "tienda-boah.appspot.com",
  messagingSenderId: "943472273828",
  appId: "1:943472273828:web:d5a71937e7896112647931"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);