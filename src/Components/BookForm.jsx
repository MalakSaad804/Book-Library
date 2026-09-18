import { useState } from "react";

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation — don't add empty books
    if (title.trim() === "" || author.trim() === "") {
      return;
    }

    onAddBook({ title: title.trim(), author: author.trim() });

    // reset the form after adding
    setTitle("");
    setAuthor("");
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
