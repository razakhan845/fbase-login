import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyehc1E5lRZORNt1yvwaK201okOAcHzw4",
  authDomain: "fbase-login-3a6c1.firebaseapp.com",
  projectId: "fbase-login-3a6c1",
  storageBucket: "fbase-login-3a6c1.appspot.com",
  messagingSenderId: "357914291820",
  appId: "1:357914291820:web:a4e9b9dac540f16bcc3249",
  measurementId: "G-CKP6JXPV6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;