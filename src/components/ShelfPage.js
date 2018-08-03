import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//components
import Shelf from './Shelf.js'


class ShelfPage extends Component {
  render() {
    console.log()
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelves.map(shelf => (
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
