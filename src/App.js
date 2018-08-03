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
    ["read", "Read"],
    ["none", "None"]
  ]
  componentDidMount() {
    BooksAPI.getAll().then(returnedBooks => this.setState({
      books: returnedBooks
    }))
  }

  removeBook = (book) => {
    this.setState(() => ({
      books: this.state.books.filter((b) => b.id !== book.id)
    }))
  }

  changeSelection = (selection, book) => {
    if (selection === this.shelves[3][0]) {
      this.removeBook(book)
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

        <Route path='/search' render={( {history} ) => (
          <SearchPage books={this.state.books}
            shelves={this.shelves}
            changeSelection={(selection, book) => {
              this.changeSelection(selection, book)
              if(selection !== this.shelves[2][0])
                history.push('/')
            }} />
        )}/>
      </div>
    )
  }
}







export default BooksApp
