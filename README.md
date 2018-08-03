# Project Title: My Reads
## A REACT App that allows a user to find books and put them on three different shelves, labeled
## "Currently Reading", "Wanting to Read", and "Read". Also, functionality to remove and replace books.

### Anthony Kosturos
### June 2018

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Files
* App.js - contains Bookshelf.js and Search.js
* Bookshelf.js - has the three shelves, and then brings in the book component to fill
* Search.js - will search from the database and then bring in books that match the search and then compare with the state of the app
* Book.js - will be the main component to fill the book information


## Backend Server
This is the backend server, the provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`
* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## In terms of searching - important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

# Contributing
* Check out CONTRIBUTING.md
