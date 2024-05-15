// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxYkpor7CFXlZQnaUiZelonuJ2T7sDSn0",
  authDomain: "book-advisor-accounts.firebaseapp.com",
  projectId: "book-advisor-accounts",
  storageBucket: "book-advisor-accounts.appspot.com",
  messagingSenderId: "722363295339",
  appId: "1:722363295339:web:a162d9a92262230cc2332e"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export default {app , database} ;
