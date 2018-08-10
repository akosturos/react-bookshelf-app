import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//components
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    returnedSearch: []
  }

  onQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
      returnedSearch: [],
    }))
  }

  mapShelfToBook (book) {
    let shelf = 'none'
    for (var books of this.props.books) {
      if (books.id === book.id) {
        shelf = books.shelf
      }
    }
    return shelf
  }

  returnSearch () {
    if (this.state.query.length !== 0) {
      if (this.state.query) {
        BooksAPI.search(this.state.query).then((returnedSearch) => {
          if (returnedSearch.error) {
            this.setState({ returnedSearch: [] })
            console.log("Error in returning API BooksAPI.search() call", returnedSearch.error)
            //return <h2>There are no books to display</h2>
          }
          else {
            this.setState({ returnedSearch })
          }
        })
      }
    }
  }

  componentWillUnmount() {
    this.setState(() => ({
      query: '',
      returnedSearch: []
    }))
  }

  render() {
    console.log("Search props", this.props)
    console.log("Search props", this.state)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/' className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                   value={this.state.query} onChange={event => {
                     this.onQuery(event.target.value)
                     this.returnSearch()
                   }}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.returnedSearch.map((book) => (
             <Book key={book.id} shelf={this.mapShelfToBook(book)}
                   book={book}
                   shelves={this.props.shelves}
                   changeSelection={this.props.changeSelection}/>
             ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
