// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhSy3DGLX-ze-UFaILdhLfvmSZVT_sFa0",
    authDomain: "genious-car-services-32e40.firebaseapp.com",
    projectId: "genious-car-services-32e40",
    storageBucket: "genious-car-services-32e40.appspot.com",
    messagingSenderId: "688771050222",
    appId: "1:688771050222:web:4deee610f4e1b7976d21ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;