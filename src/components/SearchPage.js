import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

//components
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    returnedSearch: [],
    firstVisit: false,
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
          }
          else {
            this.setState({
              returnedSearch: returnedSearch,
              firstVisit: true,
             })
          }
        })
        return this.state.returnedSearch.map((book) => (
         <Book key={book.id} shelf={this.mapShelfToBook(book)}
               book={book}
               shelves={this.props.shelves}
               changeSelection={this.props.changeSelection}/>
             ))
      } else if (this.state.firstVisit === true) {
            return (<h2>There are no books to display!</h2>)
          }
    } else if (this.state.firstVisit === true){
      return (<h2>There are no books to display!</h2>)
    }
  }

  componentWillUnmount() {
    this.setState(() => ({
      query: '',
      returnedSearch: [],
      firstVisit: false,
    }))
  }

  render() {
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
                   }}/>
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

SearchPage.propTypes = {
  books: PropTypes.array,
  shelves: PropTypes.array,
  changeSelection: PropTypes.func,
}
