// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnVZ_rdWa-KbvBuMl8qnS8ynU_d6GKUKc",
  authDomain: "emsprojects-b1208.firebaseapp.com",
  projectId: "emsprojects-b1208",
  storageBucket: "emsprojects-b1208.firebasestorage.app",
  messagingSenderId: "393093488311",
  appId: "1:393093488311:web:099563df72f2f735477732"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


//we are conteecting to our application to database
 export const db = getFirestore(app);  
