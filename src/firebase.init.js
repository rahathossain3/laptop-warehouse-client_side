// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbkdzEbKH-gWjeeKUWqs9og7tMp1tRJhY",
    authDomain: "laptop-warehouse-6a844.firebaseapp.com",
    projectId: "laptop-warehouse-6a844",
    storageBucket: "laptop-warehouse-6a844.appspot.com",
    messagingSenderId: "69463979240",
    appId: "1:69463979240:web:a5d196c380d07628ac455d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;