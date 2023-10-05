// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC96CM4boiMeJFRnPwGbui2GFpq9cS-wYM",
  authDomain: "exam-crud-c3ff2.firebaseapp.com",
  projectId: "exam-crud-c3ff2",
  storageBucket: "exam-crud-c3ff2.appspot.com",
  messagingSenderId: "44677460881",
  appId: "1:44677460881:web:54ff401dc087d3c3b5a030"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app;

