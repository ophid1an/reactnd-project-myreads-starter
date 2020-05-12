import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

const BooksSearchResults = ({ books, moveBookToShelf}) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(b => (
          <li key={b.id}>
            <Book
              cover={b.cover}
              title={b.title}
              authors={b.authors}
              shelf={b.shelf}
              moveToShelf={moveBookToShelf(b)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

BooksSearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  moveBookToShelf: PropTypes.func.isRequired,
};

export default BooksSearchResults;