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

  changeSelection = (book, selection) => {
    if (selection === 'none') {
      BooksAPI.update(book, selection).then(() => {
        book.shelf = selection
        this.setState(() => ({
          books: this.state.books.filter((b) => b.id !== book.id)
        }))
      })
    } else {
      BooksAPI.update(book, selection).then(() => {
        book.shelf = selection
        this.setState(state => ({
          books: this.state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ShelfPage shelves={this.shelves}
              books={this.state.books}
              changeSelection={this.changeSelection}/>
        )}/>

        <Route path='/search' render={() => (
          <SearchPage changeSelection={this.changeSelection} books={this.state.books} />
        )}/>
      </div>
    )
  }
}







export default BooksApp
