document.getElementById("biometricLogin").addEventListener("click", () => {
    if (!window.PublicKeyCredential) {
        alert("Biometric authentication not supported on this device.");
        return;
    }

    navigator.credentials.get({ publicKey: { challenge: new Uint8Array(16), userVerification: "required" } })
        .then(() => alert("Biometric Authentication Successful!"))
        .catch(() => alert("Biometric Authentication Failed!"));
});