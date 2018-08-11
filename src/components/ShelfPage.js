import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

//components
import Shelf from './Shelf.js'


class ShelfPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelves.filter(shelf => shelf !== this.props.shelves[3]).map(shelf => (
              <Shelf shelf={shelf} key={shelf[0]}
                     books={this.props.books.filter(book => book.shelf === shelf[0])}
                     shelves={this.props.shelves}
                     changeSelection={this.props.changeSelection}/>
            ))}
          </div>
        </div>
    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>
    </div>

    )
  }
}

export default ShelfPage

ShelfPage.propTypes = {
  books: PropTypes.array,
  shelves: PropTypes.array,
  changeSelection: PropTypes.func,
}
