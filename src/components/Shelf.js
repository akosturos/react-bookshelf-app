import React, { Component } from 'react'
//components
import Book from './Book'

class Shelf extends Component {
  render() {
    return (
        <div>
          <h2 className="bookshelf-title">{this.props.shelf[1]}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                {this.props.books.map(book => (
                  <Book book={book} key={book.id} />
                ))}
              </li>
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf
