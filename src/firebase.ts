// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0wSPC0DQXr5InK8mIKw3MoXGGwZD0m8I",
  authDomain: "hieroglyph-code.firebaseapp.com",
  projectId: "hieroglyph-code",
  storageBucket: "hieroglyph-code.firebasestorage.app",
  messagingSenderId: "12566346881",
  appId: "1:12566346881:web:97d367d768273c35cee180",
  measurementId: "G-J93S526NVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { analytics };