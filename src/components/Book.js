import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Book extends Component {

  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
               style={{ width: 128, height: 192, backgroundImage: `url(${
                 this.props.book.imageLinks.smallThumbnail ? this.props.book.imageLinks.smallThumbnail : ''})`}}></div>
          <div className="book-shelf-changer">
            <select defaultValue={this.props.shelf} onChange={event => this.props.changeSelection(event.target.value, this.props.book)}>
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors : 'Unknown'}</div>
      </div>
    )
  }
}

export default Book

Book.propTypes = {
  book: PropTypes.object,
  shelf: PropTypes.array,
  shelves: PropTypes.array,
  changeSelection: PropTypes.func,
}
