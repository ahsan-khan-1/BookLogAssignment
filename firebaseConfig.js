import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "booklog-ecb1a.firebaseapp.com",
    projectId: "booklog-ecb1a",
    storageBucket: "booklog-ecb1a.appspot.com",
    messagingSenderId: "687842180600",
    appId: "1:687842180600:web:37ee4bb36c14c5fa162a0d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

document.getElementById("googleLogin").addEventListener("click", () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log("User logged in:", result.user);
        document.getElementById("googleLogin").style.display = "none";
        document.getElementById("googleLogout").style.display = "block";
    });
});

document.getElementById("googleLogout").addEventListener("click", () => {
    signOut(auth).then(() => {
        console.log("User logged out");
        document.getElementById("googleLogin").style.display = "block";
        document.getElementById("googleLogout").style.display = "none";
    });
});

export { db };
