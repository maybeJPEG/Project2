import {useBooks} from '../domain/hooks';
import {LikeButton} from './LikeButton';
import { Link } from 'react-router-dom';


  const BookList = () => {
    const { items, state, error, refresh } = useBooks();
  
    const handleClick = () => {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    };

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
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              <p>Number of Pages: {book.numPages}</p>
              <p>ISBN: {book.isbn}</p>
              <Link to={`/books/${book.isbn}`} onClick={handleClick} > View Details </Link>
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