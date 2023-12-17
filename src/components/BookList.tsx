import React, { useEffect, useState } from 'react';
import { getAll } from '../domain/API';
import { Book } from '../domain/BookInterface';
import {useBooks} from '../domain/hooks';
import {LikeButton} from './LikeButton';


  const BookList = () => {
    const { items, state, error, refresh } = useBooks();
  
    return (
      <div>
        {state === 'loading' && <p>Loading items...</p>}
        {state === 'error' && <p>Error: {error?.message}</p>}
        {state === 'success' && (
          <>
            <h1>List of all Books</h1>
            <ul>
              {items.map((book) => (
                <li key={book.isbn}>
                                {book.cover ? (
                            <img src={book.cover} alt={`${book.title} Cover`} />
                        ) : (
                            <p>No Image</p>
                        )}
                <h2>{book.title}</h2>
              {book.subtitle && <h3>{book.subtitle}</h3>}
              <p>{book.abstract}</p>
              <p>Author: {book.author}</p>
              <p>Publisher: {book.publisher}</p>
              <p>Price: ${book.price}</p>
              <p>Number of Pages: {book.numPages}</p>
              <p>ISBN: {book.isbn}</p>
              <LikeButton isbn={book.isbn} initialLikes={0} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }; 
  
  
  export default BookList;