function BookItem({ book, onDeleteBook }) {
  return (
    <li className="book-item">
      <div className="book-info">
        <strong>{book.title}</strong>
        <span> by {book.author}</span>
      </div>
      <button onClick={() => onDeleteBook(book.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default BookItem;
