import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const BooksList = ({ books, moveBookToShelf }) => {
  const shelves = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(s => (
            <BookShelf
              key={s.id}
              shelfTitle={s.title}
              books={books.filter(b => s.id === b.shelf)}
              moveBookToShelf={moveBookToShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  moveBookToShelf: PropTypes.func.isRequired,
};

export default BooksList;