// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "booklog-ecb1a.firebaseapp.com",
    projectId: "booklog-ecb1a",
    storageBucket: "booklog-ecb1a.appspot.com",
    messagingSenderId: "687842180600",
    appId: "1:687842180600:web:37ee4bb36c14c5fa162a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
