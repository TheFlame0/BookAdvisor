// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhzp4WyVCkQAvl1VagdVhXaWiw4k0OMyQ",
    authDomain: "swe-363-project-3b6b0.firebaseapp.com",
    projectId: "swe-363-project-3b6b0",
    storageBucket: "swe-363-project-3b6b0.appspot.com",
    messagingSenderId: "72715881710",
    appId: "1:72715881710:web:36d2cc7ecc54c2fadeb7ff",
    measurementId: "G-DVWEE1L147",
    databaseURL: "https://swe-363-project-3b6b0-default-rtdb.asia-southeast1.firebasedatabase.app"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export default {app , database} ;
