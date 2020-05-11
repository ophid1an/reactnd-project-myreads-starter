import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

const BookShelf = ({shelfTitle, books}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.filter(b => shelfTitle === b.shelf).map(b => (
          <li key={b.title}>
            <Book
              cover={b.cover}
              title={b.title}
              authors={b.authors}
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
};

export default BookShelf;