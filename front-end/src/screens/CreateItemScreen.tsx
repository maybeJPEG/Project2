import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from '../domain/BookInterface';
import BookForm from '../components/NewBookForm';
import { postBook } from '../domain/API';

interface CreateNewItemScreenProps {}

const CreateNewItemScreen: React.FC<CreateNewItemScreenProps> = () => {
  const [newBook, setNewBook] = useState<Book>({

    isbn: '',
    title: '',
    subtitle: '',
    abstract: '',
    author: '',
    publisher: '',
    price: 0,
    numPages: 0,
  });

  const navigate = useNavigate();

  const handleCreate = async (book: Book) => {
    try {
      const createdBook = await postBook(book);
      console.log('Item created successfully:', createdBook);

      // Redirect to the ItemDetailScreen for the newly created item
      navigate(`/items/${createdBook.isbn}`);
    } catch (error : any) {
      console.error('Error creating item:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleCancel = () => {
    navigate('/'); // Adjust the route to your All-Items Screen route
  };


  return (
    <div>
      <h2>Create New Item</h2>
      <BookForm onSubmit={handleCreate} />
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default CreateNewItemScreen;