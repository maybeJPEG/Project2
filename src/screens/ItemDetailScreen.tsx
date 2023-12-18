import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getByIsbn } from '../domain/API'; // Import your getByIsbn function
import { Book } from '../domain/BookInterface'; // Import your Book interface
import { LikeButton } from '../components/LikeButton';

interface ItemDetailScreenProps {}

export const ItemDetailScreen: React.FC<ItemDetailScreenProps> = () => {
  const { isbn } = useParams<{ isbn: string | undefined }>();
  const [book, setBook] = useState<Book | undefined>(undefined);

  // Fetch your book details in useEffect
  useEffect(() => {
    const fetchBook = async () => {
        try {
            // Ensure that isbn is defined before making the API call
            if (isbn) {
              const bookDetails = await getByIsbn(isbn);
              setBook(bookDetails);
            }
          } catch (error: any) {
            console.error('Error fetching book details:', error.message);
          }
    };

    fetchBook();
  }, [isbn]);

  return (
    <div>
      <br />
      <h2>Book Detail Screen</h2>

      <Link to={'/items'}>
        <span>⬅️ &nbsp; </span>Back to all books
      </Link>
      <br />
      {book ? (
        <>
          <img src={book.cover} alt={`${book.title} Cover`} />
          <ul style={{ listStyle: 'none' }}>
            <li>Title: {book.title}</li>
            {book.subtitle && <li>Subtitle: {book.subtitle}</li>}
            <li>Price: ${book.price}</li>
            <li>Description: {book.abstract}</li>
            <li>Author: {book.author}</li>
            <li>Publisher: {book.publisher}</li>
            <li>Number of Pages: {book.numPages}</li>
            <li>ISBN: {book.isbn}</li>
          </ul>
          <LikeButton isbn={book.isbn} initialLikes={0} />
          <br />
          <NavLink to={`/items/${isbn}/edit`}>
            <button>Edit</button>
          </NavLink>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};