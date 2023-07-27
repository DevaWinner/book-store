import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Book from './Book';
import Input from './Input';

const Booklist = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const deleteHandler = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <>
      {books.map((book) => (
        <Book key={book.itemId} book={book} deleteBook={() => deleteHandler(book.itemId)} />
      ))}
      <Input />
    </>
  );
};

export default Booklist;
