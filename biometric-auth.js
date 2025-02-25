import { auth } from "./firebaseConfig.js";
import { signInWithCustomToken } from "firebase/auth";

// Simulating biometric login (Use real biometric API on mobile)
document.getElementById("biometricLogin").addEventListener("click", async () => {
    try {
        const biometricSuccess = confirm("Use Biometrics to Login?"); // Simulating Biometric API
        if (!biometricSuccess) return;

        // Ideally, get a secure token from the backend
        const fakeToken = "your_custom_firebase_token"; 

        // Sign in using Firebase custom token
        const userCredential = await signInWithCustomToken(auth, fakeToken);
        console.log("Biometric Login Success:", userCredential.user);

        window.location.href = "app.html";
    } catch (error) {
        console.error("Biometric Login Failed:", error);
    }
});
