import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
    },
  ];

  return (
    <main>
      <div>
        {books.map(({ id, title, author }) => (
          <Book key={id} title={title} author={author} />
        ))}
      </div>
    </main>
  );
};

export default BookList;
