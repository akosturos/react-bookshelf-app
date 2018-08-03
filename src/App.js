import React from 'react'
import { Route } from 'react-router-dom'
// Non-components
import * as BooksAPI from './BooksAPI'
import './App.css'
// Components
import SearchPage from './components/SearchPage'
import ShelfPage from './components/ShelfPage'
//import Book from './components/Book'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  // computer values with text equivalent
  shelves = [
    ["currentlyReading", "Currently Reading"],
    ["wantToRead", "Want to Read"],
    ["read", "Read"]
  ]
  componentDidMount() {
    BooksAPI.getAll().then(returnedBooks => this.setState({
      books: returnedBooks
    }))
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ShelfPage shelves={this.shelves}
              books={this.state.books}/>
        )}/>

        <Route path='/search' render={() => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}







export default BooksApp
