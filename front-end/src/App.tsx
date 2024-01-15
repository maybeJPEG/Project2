
import './App.css';
import AppHeader from './components/AppHeader';
import BookList from './components/BookList';
import { getByIsbn } from './domain/API';
import React, { useEffect, useState } from 'react';
import { Book } from './domain/BookInterface';
import { useBooks } from './domain/hooks';
import { Outlet } from "react-router-dom";
import Login from './components/Login';

function App() {

  const [isbn, setIsbn] = useState("")
  const [book, setBook] = useState<Book | undefined>(undefined)
  const { state, error, refresh } = useBooks();
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCancelLogin = () => {
    setShowLogin(false);
  };


  return (
    <div className="App">

      <header className="App-header">
        <div>
          {/* Login button */}
          <button onClick={handleLoginClick}>Login</button>

          {/* Login screen */}
          {showLogin && (
            <Login onCancel={handleCancelLogin} />
          )}
          <AppHeader />
          <Outlet />
        </div>

      </header>

      <body className="App-body">

        <p className="BooksRosaHeading">
          BooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooksBooks
        </p>

        <div className="SearchForISBN_Div">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          {"The ISBN of the Book i am looking for is: "}
          <input onChange={(e) => setIsbn(e.target.value)} value={isbn}></input>
          <button onClick={async () => setBook(await getByIsbn(isbn))}> Click here for Title </button>
          {book?.title}
        </div>

        {state === 'loading' && <p>Loading items...</p>}
        {state === 'error' && <p>Error: {error?.message}</p>}
        {state === 'success' && (
          <div>
            <BookList />
            <button onClick={refresh}>Refresh</button>
          </div>
        )}
      </body>
    </div>
  );
}

export default App;

