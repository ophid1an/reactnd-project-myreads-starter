import React from 'react';
import PropTypes from 'prop-types';
import BooksSearchBar from "./BooksSearchBar";
import BooksSearchResults from "./BooksSearchResults";

class BooksSearch extends React.Component {
  state = {
    results: [],
  }

  static propTypes = {
    booksMap: PropTypes.object.isRequired,
    moveBookToShelf: PropTypes.func.isRequired,
  };

  setResults = (data) => {
    this.setState({
      results: data.error ? [] : data.map(({id, imageLinks, title, authors = [],}) => ({
        id,
        cover: imageLinks ? imageLinks.thumbnail : '',
        title,
        authors,
        shelf: this.props.booksMap.get(id) || 'none',
      })),
    });

  }

  render() {
    const { moveBookToShelf } = this.props;

    return (
      <div className="search-books">
        <BooksSearchBar setResults={this.setResults} />
        <BooksSearchResults
          books={this.state.results}
          moveBookToShelf={moveBookToShelf}
        />
      </div>
    );
  }
}

export default BooksSearch;