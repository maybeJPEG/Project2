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
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      {/* Add similar input fields for other properties */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;