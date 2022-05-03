// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4ebz84sL8PEUF3rZFO407nWs5TFfR7K4",
    authDomain: "laptop-warehouse-aad91.firebaseapp.com",
    projectId: "laptop-warehouse-aad91",
    storageBucket: "laptop-warehouse-aad91.appspot.com",
    messagingSenderId: "262590796360",
    appId: "1:262590796360:web:8ee953c34c88aedb7abe7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;