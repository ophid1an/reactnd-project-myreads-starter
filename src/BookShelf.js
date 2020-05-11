import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

const BookShelf = ({ shelfTitle, books, moveBookToShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(b => (
          <li key={b.id}>
            <Book
              cover={b.cover}
              title={b.title}
              authors={b.authors}
              shelf={b.shelf}
              moveToShelf={moveBookToShelf(b.id)}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  moveBookToShelf: PropTypes.func.isRequired,
};

export default BookShelf;