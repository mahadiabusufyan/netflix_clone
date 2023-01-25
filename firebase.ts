// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-dQ1oNPSZgQj3RWnxLRhl8n2d14hh5k",
  authDomain: "netflix-clone-gh-2022.firebaseapp.com",
  projectId: "netflix-clone-gh-2022",
  storageBucket: "netflix-clone-gh-2022.appspot.com",
  messagingSenderId: "1044575312216",
  appId: "1:1044575312216:web:f2acd991eb52f647a32d2d",
  measurementId: "G-BZ1RSTWT5Z"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = !getApps().length?initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export {auth,db}