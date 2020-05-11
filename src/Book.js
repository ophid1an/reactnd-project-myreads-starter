import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from "./BookShelfChanger";

const Book = ({cover, title, authors, shelf, moveBookToShelf}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${cover}")` }}></div>
        <BookShelfChanger shelf={shelf} moveToShelf={moveBookToShelf(title)}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Book.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  moveBookToShelf: PropTypes.func.isRequired
};

export default Book;