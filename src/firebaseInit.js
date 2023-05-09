// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQeRbb391W8Qpt1wQInk2PrZiUf9uibkc",
  authDomain: "cart-d668e.firebaseapp.com",
  projectId: "cart-d668e",
  storageBucket: "cart-d668e.appspot.com",
  messagingSenderId: "790006431652",
  appId: "1:790006431652:web:86e5f42999cbfadb43cb31"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
