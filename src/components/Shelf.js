import React, { Component } from 'react'
//components
import Book from './Book'

class Shelf extends Component {
  render() {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf[1]}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => (
              <li key={book.id}>
                  <Book book={book} shelves={this.props.shelves}
                        changeSelection={this.props.changeSelection}/>
              </li>
                ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf
