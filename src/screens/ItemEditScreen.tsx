import React, { FormEvent, useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { getByIsbn, updateBook } from '../domain/API';
import { Book } from '../domain/BookInterface';
import BookForm from '../components/BookForm';

interface ItemEditScreenProps { }

export const ItemEditScreen: React.FC<ItemEditScreenProps> = () => {
    const { isbn } = useParams<{ isbn: string | undefined }>();
    const [book, setBook] = useState<Book | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                if (isbn) {
                    const bookDetails = await getByIsbn(isbn);
                    setBook(bookDetails || ({} as Book));
                }
            } catch (error: any) {
                console.error('Error fetching book details:', error.message);
            }
        };

        fetchBook();
    }, [isbn]);

    const handleBookChange = (updatedBook: Book) => {
        setBook(updatedBook);
    };

    return (
        
        <div > <h2>Edit Screen</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {book ? (
                <>
                    <div style={{ flex: 1, marginRight: '10px' }}>
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
                    </div>
                    <div style={{ flex: 1 }}>
                        <BookForm initialBook={book} onChange={handleBookChange} />
                    </div>
                </>
            ) : (
                <p>Loading book details...</p>
            )}
        </div>
        </div>
    );
};