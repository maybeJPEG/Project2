// DeleteItemScreen.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteByIsbn } from '../domain/API';

interface DeleteItemScreenProps {}

const DeleteItemScreen: React.FC<DeleteItemScreenProps> = () => {
  const { isbn: urlIsbn } = useParams<{ isbn?: string }>();
  const [isbn, setIsbn] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (urlIsbn) {
      setIsbn(urlIsbn);
    }
  }, [urlIsbn]);

  const handleDelete = async () => {
    try {
      if (isbn) {
        const isbnNumber = parseInt(isbn, 10); // Convert to number
        await deleteByIsbn(isbnNumber);
        console.log(`Successfully deleted book with ISBN ${isbn}`);
        // After successful delete, navigate to the list of items screen
        navigate('/');
      } else {
        console.error('Invalid ISBN');
        // Handle the case where the ISBN is empty or undefined
      }
    } catch (error : any) {
      console.error('Error deleting item:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <div>
        {/* Input field for ISBN */}
        <label htmlFor="isbnInput">Enter 13-digit ISBN:</label>
        <input
          type="text"
          id="isbnInput"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          placeholder="e.g., 1234567890123"
        />
      </div>
      <div>
        {/* Button to trigger delete */}
        <button onClick={handleDelete}>Delete Item</button>
      </div>
      <div>
        {/* You can add a loading spinner or any other UI here if needed */}
      </div>
    </div>
  );
};

export default DeleteItemScreen;