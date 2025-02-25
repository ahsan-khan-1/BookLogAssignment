document.getElementById("askBot").addEventListener("click", async () => {
    const query = document.getElementById("chatInput").value;
    if (!query) return;

    document.getElementById("chatResponse").innerText = "🤖 Thinking...";
    setTimeout(() => {
        document.getElementById("chatResponse").innerText = "AI Bot: I recommend 'The Great Gatsby'!";
    }, 1500);
});