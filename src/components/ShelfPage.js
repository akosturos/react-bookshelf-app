import React, { Component } from 'react'

//components
import Book from './Book'

class ShelfPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelves.map((shelf) => (
              <div className="bookshelf">
                <h2 className="bookshelf-title" key={shelf[1]}>{shelf[1]}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>

                    </li>
                  </ol>
                </div>
              </div>
            ))}

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
