import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateBook } from '../domain/API';
import { Book } from '../domain/BookInterface';

interface BookFormProps {
    initialBook: Book;
    onChange: (updatedBook: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ initialBook, onChange }) => {
    const [book, setBook] = useState<Book>(initialBook);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({ ...prevBook, [name]: value }));
        onChange({ ...initialBook, [name]: value }); // Notify the parent component about the change
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await updateBook(book);
            navigate(`/books/${book.isbn}`);
        } catch (error: any) {
            console.error('Error updating book:', error.message);
            alert('Update error!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={book.title}
                onChange={handleChange}
                style={{ width: '50%', marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <label htmlFor="subtitle">Subtitle:</label>
            <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={book.subtitle}
                onChange={handleChange}
                style={{ width: '50%', marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <label htmlFor="abstract">Abstract:</label>
            <input
                type="text"
                id="abstract"
                name="abstract"
                value={book.abstract}
                onChange={handleChange}
                style={{ width: '50%', marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                name="author"
                value={book.author}
                onChange={handleChange}
                style={{ width: '50%', marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <label htmlFor="publisher">Publisher:</label>
            <input
                type="text"
                id="publisher"
                name="publisher"
                value={book.publisher}
                onChange={handleChange}
                style={{ width: '50%', marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                name="price"
                value={book.price}
                onChange={handleChange}
                style={{ width: '10%', marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <label htmlFor="numPages">Number of Pages:</label>
            <input
                type="number"
                id="numPages"
                name="numPages"
                value={book.numPages}
                onChange={handleChange}
                style={{ width: '10%', marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <button type="submit">Save</button>
        </form>
    );
};

export default BookForm;