// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'next-blog-f2fc4.firebaseapp.com',
  projectId: 'next-blog-f2fc4',
  storageBucket: 'next-blog-f2fc4.appspot.com',
  messagingSenderId: '239598032236',
  appId: '1:239598032236:web:639ec027696f7267e04f49',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
