import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import BooksSearch from "./BooksSearch";
import BooksList from "./BooksList";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path='/search'>
          <BooksSearch />
        </Route>
        <Route exact path='/'>
          <BooksList />
        </Route>
      </div>
    )
  }
}

export default BooksApp
