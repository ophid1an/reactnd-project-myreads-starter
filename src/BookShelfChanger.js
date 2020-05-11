import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {
  state = {
    shelf: this.props.shelf, // first render get shelf from props
  }

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    moveToShelf: PropTypes.func.isRequired,
  };

  onSelectShelf = (e) => {
    this.props.moveToShelf(e.target.value);
    this.setState({shelf: e.target.value});
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.onSelectShelf}
          value={this.state.shelf}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;