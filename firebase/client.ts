// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXPRChWKlJE4eQTFkCClZUrfklQdbC6XA",
  authDomain: "prepmate-86f87.firebaseapp.com",
  projectId: "prepmate-86f87",
  storageBucket: "prepmate-86f87.firebasestorage.app",
  messagingSenderId: "764338680864",
  appId: "1:764338680864:web:2ee499644710ffea4d3845",
  measurementId: "G-873CN961DR"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


// -----------------------

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAXPRChWKlJE4eQTFkCClZUrfklQdbC6XA",
//   authDomain: "prepmate-86f87.firebaseapp.com",
//   projectId: "prepmate-86f87",
//   storageBucket: "prepmate-86f87.firebasestorage.app",
//   messagingSenderId: "764338680864",
//   appId: "1:764338680864:web:2ee499644710ffea4d3845",
//   measurementId: "G-873CN961DR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);