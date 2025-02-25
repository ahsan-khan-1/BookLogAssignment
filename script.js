// script.js
import { auth, provider } from "./firebaseConfig.js";
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Handle Google Sign-In
document.addEventListener("DOMContentLoaded", () => {
    const googleLoginButton = document.getElementById("googleLogin");
    const emailForm = document.getElementById("emailForm");
    const messageDisplay = document.getElementById("message");

    if (googleLoginButton) {
        googleLoginButton.addEventListener("click", () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log("User signed in with Google:", result.user);
                    window.location.href = "app.html"; // Redirect after login
                })
                .catch((error) => {
                    console.error("Google Login failed:", error);
                    messageDisplay.textContent = "Google Sign-In failed. Please try again.";
                });
        });
    }

    // Handle Email Sign Up / Login
    if (emailForm) {
        emailForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Sign Up
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("User signed up with email:", userCredential.user);
                    window.location.href = "app.html"; // Redirect after signup
                })
                .catch((error) => {
                    // Try to sign in if the user already exists
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            console.log("User signed in with email:", userCredential.user);
                            window.location.href = "app.html"; // Redirect after login
                        })
                        .catch((error) => {
                            console.error("Email login failed:", error);
                            messageDisplay.textContent = error.message;
                        });
                });
        });
    }

    // Auto Redirect If Logged In
    onAuthStateChanged(auth, (user) => {
        if (user && window.location.pathname.includes("index.html")) {
            window.location.href = "app.html";
        }
    });
});

// Handle Logout
document.getElementById("logout").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            console.log("User signed out");
            window.location.href = "index.html"; // Redirect to login page
        })
        .catch((error) => {
            console.error("Sign out error:", error);
        });
});
