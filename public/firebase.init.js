import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFaUBU-CC6k3TOLZLOe8PscqpKAhh_Op4",
  authDomain: "auth-moha-milo-274a5.firebaseapp.com",
  projectId: "auth-moha-milo-274a5",
  storageBucket: "auth-moha-milo-274a5.appspot.com", // <--- fixed here
  messagingSenderId: "965164417402",
  appId: "1:965164417402:web:694b7cafc9ff4d4ad0d6c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
