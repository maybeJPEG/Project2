import React, { useState } from 'react';
import { Book } from '../domain/BookInterface';

interface BookFormProps {
    onSubmit: (book: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Book>({
        isbn: '',
        title: '',
        subtitle: '',
        abstract: '',
        author: '',
        publisher: '',
        price: 0,
        numPages: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate ISBN before submitting
        if (!validateIsbn(formData.isbn)) {
            // Handle invalid ISBN (show error message, etc.)
            console.error('Invalid ISBN');
            return;
        }

        onSubmit(formData);
    };

    const validateIsbn = (isbn: string) => {
        // Validate that the ISBN is a 13-digit number
        return /^\d{13}$/.test(isbn);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="isbn">Isbn:</label>
            <input
                type="text"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                pattern="\d{13}" // Pattern attribute for HTML5 validation
                title="Please enter a valid 13-digit ISBN."
                required
            />
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="subtitle">Subtitle:</label>
            <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="abstract">Abstract:</label>
            <input
                type="text"
                id="abstract"
                name="abstract"
                value={formData.abstract}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="publisher">Publisher:</label>
            <input
                type="text"
                id="publisher"
                name="publisher"
                value={formData.publisher}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="numPages">Number of Pages:</label>
            <input
                type="number"
                id="numPages"
                name="numPages"
                value={formData.numPages}
                onChange={handleChange}
                required
            />
            <br />
            {/* Add similar input fields for other properties */}
            <button type="submit">Save</button>
        </form>
    );
};

export default BookForm;