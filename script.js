import { auth, provider, db } from "./firebaseConfig.js";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

// Google Login
document.getElementById("googleLogin")?.addEventListener("click", () => {
    signInWithPopup(auth, provider).then(() => {
        window.location.href = "app.html";
    }).catch(error => {
        console.error("Login failed:", error);
    });
});

// Logout
document.getElementById("logout")?.addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    });
});

// Load Books
async function loadBooks(userId) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    const q = query(collection(db, "books"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const book = doc.data();
        const li = document.createElement("li");
        li.innerText = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

// Auto Redirect If Logged In
onAuthStateChanged(auth, (user) => {
    if (user && window.location.pathname.includes("index.html")) {
        window.location.href = "app.html";
    } else if (user && window.location.pathname.includes("app.html")) {
        loadBooks(user.uid);
    }
});
