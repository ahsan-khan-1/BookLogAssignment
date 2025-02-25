import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Add Book
document.getElementById("addBook").addEventListener("click", async () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const rating = document.getElementById("rating").value;
    const genre = document.getElementById("genre").value;

    if (title && author && rating) {
        await addDoc(collection(db, "books"), { title, author, rating, genre });
        loadBooks();
    }
});

// Load Books
async function loadBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.forEach((doc) => {
        const book = doc.data();
        const li = document.createElement("li");
        li.innerHTML = `${book.title} by ${book.author} - ${book.rating}/5 [${book.genre}]
            <button onclick="deleteBook('${doc.id}')">❌</button>`;
        bookList.appendChild(li);
    });
}

// Delete Book
async function deleteBook(id) {
    await deleteDoc(doc(db, "books", id));
    loadBooks();
}

loadBooks();
