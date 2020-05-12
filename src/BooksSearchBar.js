import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';

class BooksSearchBar extends React.Component {
  state = {
    query: '',
  };

  static propTypes = {
    setResults: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    const query = e.target.value;
    this.setState({ query });

    if (query.length > 2) {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
      this.timerId = setTimeout(() =>
        BooksAPI.search(query)
          .then(res => this.props.setResults(res))
      , 500);
    }
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }

}

export default BooksSearchBar;