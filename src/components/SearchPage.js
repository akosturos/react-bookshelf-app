import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//components
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: "",
    returnedSearch: []
  }

  onQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
      returnedSearch: []
    }))
  }

  mapShelfToBook = (book) => {
    let shelf = "none"
    this.props.books.map((b) => {
      if (b.id === book.id) {
        return b.shelf
      }
    })
    return shelf
  }

  returnSearch () {
    if (this.state.query.length !== 0) {
      if (this.state.query) {
        BooksAPI.search(this.state.query).then((returnedSearch) => {
          if (returnedSearch.error) {
            this.setState({ returnedSearch: [] })
            console.log("Error in returning API BooksAPI.search() call", returnedSearch.error)
            return <h2>There are no books to display</h2>
          }
          else {
            this.setState({ returnedSearch })
          }
        })
      }
      return this.state.returnedSearch.map((book) => (
         <Book key={book.id} shelf={this.props.shelves[1][0]}
               book={book}
               shelves={this.props.shelves}
               changeSelection={this.props.changeSelection}/>
           ))
    }
  }

  componentWillUnmount() {
    this.setState(() => ({
      query: '',
      returnedSearch: []
    }))
  }

  render() {
    console.log(this.props, "Search props", this.props.shelves[2][0])
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/' className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                   value={this.state.query} onChange={event => this.onQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.returnSearch()}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
