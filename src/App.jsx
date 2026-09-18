import { useState } from "react";
import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      {
        id: crypto.randomUUID(), // stable, unique id — never use array index as key
        ...newBook,
      },
    ]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div className="app">
      <h1>📚 My Book Library</h1>
      <BookForm onAddBook={handleAddBook} />
      <BookList books={books} onDeleteBook={handleDeleteBook} />
    </div>
  );
}

export default App;
