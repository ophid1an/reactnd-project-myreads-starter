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

  mapping = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
    none: 'None',
  };

  onSelectShelf = (e) => {
    this.props.moveToShelf(this.mapping[e.target.value]);
    this.setState({shelf: this.mapping[e.target.value]});
  };

  getSelectValue = () => {
    const invMapping = {};
    Object.keys(this.mapping).forEach(k => invMapping[this.mapping[k]] = k);

    return invMapping[this.state.shelf];
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.onSelectShelf}
          value={this.getSelectValue()}
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