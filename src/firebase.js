// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnFuCEds94zdkdegxxeNzloEq6SQmSvyQ",
  authDomain: "environot-db.firebaseapp.com",
  projectId: "environot-db",
  storageBucket: "environot-db.firebasestorage.app",
  messagingSenderId: "564407471159",
  appId: "1:564407471159:web:290a986f4f0d589d2803b2",
  measurementId: "G-3W5XPKVC82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db, collection, addDoc, getDocs };