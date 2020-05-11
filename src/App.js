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
          books: res.map(({id, shelf, imageLinks, title, authors,}) => ({
            id,
            shelf,
            cover: imageLinks.thumbnail,
            title,
            authors,
          }))
        })
      });
  }

  moveBookToShelf = bookId => shelfId => {
    BooksAPI.update({id: bookId}, shelfId)
      .then(() => this.setState(prevState => {
        const books = prevState.books;

        for (let i=0; i < books.length; i++) {
          if (bookId === books[i].id && shelfId !== books[i].shelf) {
            return 'none' !== shelfId ?
              {
                books: [
                  ...books.slice(0, i),
                  {...books[i], shelf: shelfId},
                  ...books.slice(i+1, books.length)
                ]
              } :
              {
                books: [
                  ...books.slice(0, i),
                  ...books.slice(i+1, books.length)
                ]
              }
          }
        }
      }));
  };

  render() {
    return (
      <div className="app">
        <Route path='/search'>
          <BooksSearch />
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
