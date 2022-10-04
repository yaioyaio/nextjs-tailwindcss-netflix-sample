// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzEQTSHEeI3cpjkTYYi1VuyyDo7OOI9Nw",
  authDomain: "nextjs-tailwindcss-netflix.firebaseapp.com",
  projectId: "nextjs-tailwindcss-netflix",
  storageBucket: "nextjs-tailwindcss-netflix.appspot.com",
  messagingSenderId: "898664114831",
  appId: "1:898664114831:web:1ae7124671d52d11491efa",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
