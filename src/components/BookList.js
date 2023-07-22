import React from 'react';
import books from './Book';

const Booklist = () => (
  <div>
    {books.map((book) => (
      <div className="book-list" key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.category}</p>
        <button type="button" id={book.id}>delete</button>
      </div>
    ))}
  </div>
);

export default Booklist;
