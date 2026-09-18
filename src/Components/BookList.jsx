import BookItem from "./Bookitem";

function BookList({ books, onDeleteBook }) {
 if (books.length === 0) {
  return <p className="empty-message">No books yet. Add one above! 👆</p>;
}

  return (
    <ul className="book-list">
      {books.map((book) => (
        // key uses book.id (stable, unique) — never the array index
        <BookItem key={book.id} book={book} onDeleteBook={onDeleteBook} />
      ))}
    </ul>
  );
}

export default BookList;