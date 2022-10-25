// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPJ6AthYscv0vTqpWf-IJwYaiILtOLcc",
  authDomain: "learn-with-educal.firebaseapp.com",
  projectId: "learn-with-educal",
  storageBucket: "learn-with-educal.appspot.com",
  messagingSenderId: "907141567293",
  appId: "1:907141567293:web:103922bfbde39b78d56b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;