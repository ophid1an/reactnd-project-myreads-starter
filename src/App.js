import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import BooksSearch from "./BooksSearch";
import BooksList from "./BooksList";
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(res => {
        this.setState({
          books: res.map(({id, shelf, imageLinks, title, authors = [],}) => ({
            id,
            shelf,
            cover: imageLinks ? imageLinks.thumbnail : '',
            title,
            authors,
          }))
        });
      });
  }

  moveBookToShelf = book => shelfId => {
    BooksAPI.update({id: book.id}, shelfId)
      .then(() => this.setState(prevState => {
        const books = prevState.books;

        if (shelfId === book.id) {
          return;
        }

        if ('none' === book.shelf) {
          return {
            books: [...books, { ...book, shelf: shelfId }],
          };
        }

        for (let i=0; i < books.length; i++) {
          if (book.id === books[i].id) {
            return 'none' !== shelfId ?
              {
                books: [
                  ...books.slice(0, i),
                  ...books.slice(i+1, books.length),
                  {...books[i], shelf: shelfId},
                ]
              } :
              {
                books: [
                  ...books.slice(0, i),
                  ...books.slice(i+1, books.length),
                ]
              }
          }
        }
      }));
  };

  getBooksMap = () => {
    const booksMap = new Map();
    this.state.books.forEach(b => {
      booksMap.set(b.id, b.shelf);
    });

    return booksMap;
  }

  render() {
    return (
      <div className="app">
        <Route path='/search'>
          <BooksSearch
            booksMap={this.getBooksMap()}
            moveBookToShelf={this.moveBookToShelf}
          />
        </Route>
        <Route exact path='/'>
          <BooksList
            books={this.state.books}
            moveBookToShelf={this.moveBookToShelf}
          />
        </Route>
      </div>
    )
  }
}

export default BooksApp
