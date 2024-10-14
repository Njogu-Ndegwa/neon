// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYrHikoJwTm3KOz9rfzmBixsUYzv5YhZI",
    authDomain: "school-project-bc96a.firebaseapp.com",
    projectId: "school-project-bc96a",
    storageBucket: "school-project-bc96a.appspot.com",
    messagingSenderId: "40006148947",
    appId: "1:40006148947:web:3739d57c0213a4dbabf7a6",
    measurementId: "G-R92XRKXXGL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);