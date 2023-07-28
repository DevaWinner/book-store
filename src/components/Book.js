import React from 'react';
import PropTypes from 'prop-types';
import Chapter from './Chapter';
import Stats from './Stats';

function Book({ book, deleteBook }) {
  return (
    <div>
      <li>
        <div>
          <div>
            <div>
              {book.category}
            </div>
            <div>
              {book.title}
            </div>
            <div>
              {book.author}
            </div>
          </div>
          <div>
            <button type="button">
              Comments
            </button>
            <button type="button" onClick={() => deleteBook(book.id)}>
              Remove
            </button>
            <button type="button">
              Edit
            </button>
          </div>
        </div>
        <Stats />
        <Chapter />
      </li>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
