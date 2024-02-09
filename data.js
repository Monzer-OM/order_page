// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk96izrhPnLj5c0YDk4xy2qUTtPSSLy_o",
  authDomain: "order-50687.firebaseapp.com",
  projectId: "order-50687",
  storageBucket: "order-50687.appspot.com",
  messagingSenderId: "580595590929",
  appId: "1:580595590929:web:2fbd7923e54f3875f80eb0",
  measurementId: "G-6GLE0TNNZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);