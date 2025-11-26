import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnI0Q3BQbJdvu-tcFRi8o-DEftfY8oq34",
  authDomain: "matrixo-test-intern-webdev.firebaseapp.com",
  projectId: "matrixo-test-intern-webdev",
  storageBucket: "matrixo-test-intern-webdev.firebasestorage.app",
  messagingSenderId: "935005563326",
  appId: "1:935005563326:web:08ebc68a755c5ecb5c31ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
