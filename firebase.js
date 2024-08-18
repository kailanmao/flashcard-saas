// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5fkb7wrIlhUQSgDMxakcGZA824EJeBXw",
  authDomain: "flashcard-saas-cbd09.firebaseapp.com",
  projectId: "flashcard-saas-cbd09",
  storageBucket: "flashcard-saas-cbd09.appspot.com",
  messagingSenderId: "1000115025814",
  appId: "1:1000115025814:web:a87b6596e9809831d40fb7",
  measurementId: "G-RPCVY2WKFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};