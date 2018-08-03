import React, { Component } from 'react'

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
            <div className="bookshelf">
              {this.props.shelves.map(shelf => (
                <Shelf shelf={shelf} key={shelf}
                    books={this.props.books.filter(book => book.shelf === shelf)}
                />
              ))}
            </div>
          </div>
        </div>
    <div className="open-search">
      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
    </div>
    </div>

    )
  }
}

export default ShelfPage
