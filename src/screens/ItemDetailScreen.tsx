import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getByIsbn } from '../domain/API'; 
import { Book } from '../domain/BookInterface'; 
import { LikeButton } from '../components/LikeButton';

interface ItemDetailScreenProps { }

export const ItemDetailScreen: React.FC<ItemDetailScreenProps> = () => {
  const { isbn } = useParams<{ isbn: string | undefined }>();
  const [book, setBook] = useState<Book | undefined>(undefined);


  useEffect(() => {
    const fetchBook = async () => {
      try {
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
      <h2>Book Detail Screen</h2>
      {book ? (
        <>
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
          <br /><br />
          <NavLink to={'/'}>
            <span>⬅️ &nbsp; </span>Back to all books
          </NavLink>
          <br /> <br />
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};