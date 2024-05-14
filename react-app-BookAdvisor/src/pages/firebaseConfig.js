// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDnYUG5c5Yo_txT_D21Of7UBgpo3V01QbQ",
  authDomain: "bookadvisor-9933b.firebaseapp.com",
  databaseURL: "https://bookadvisor-9933b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "bookadvisor-9933b",
  storageBucket: "bookadvisor-9933b.appspot.com",
  messagingSenderId: "936852511684",
  appId: "1:936852511684:web:b74b74579cf43e4a7d6291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };


// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDnYUG5c5Yo_txT_D21Of7UBgpo3V01QbQ",
//   authDomain: "bookadvisor-9933b.firebaseapp.com",
//   databaseURL: "https://bookadvisor-9933b-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "bookadvisor-9933b",
//   storageBucket: "bookadvisor-9933b.appspot.com",
//   messagingSenderId: "936852511684",
//   appId: "1:936852511684:web:b74b74579cf43e4a7d6291"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// export default firebaseConfig