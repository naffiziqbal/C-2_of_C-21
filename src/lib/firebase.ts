// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1BK3RtfgPH_v5uSU5UuTstPKE9k3sYFo",
    authDomain: "technet-5b138.firebaseapp.com",
    projectId: "technet-5b138",
    storageBucket: "technet-5b138.appspot.com",
    messagingSenderId: "933108652653",
    appId: "1:933108652653:web:3ec5c4f1005ecc78033d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
