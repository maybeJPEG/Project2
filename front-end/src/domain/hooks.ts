import { useState, useEffect } from 'react';
import { getAll } from './API';
import { Book, BookI } from "./BookInterface";

type FetchState = 'initial' | 'loading' | 'success' | 'error';

interface UseBooksResult {
  items: Book[];
  state: FetchState;
  error: Error | null;
  refresh: () => void;
}

const useBooks = (): UseBooksResult => {
  const [items, setItems] = useState<Book[]>([]);
  const [state, setState] = useState<FetchState>('initial');
  const [error, setError] = useState<Error | null>(null);

  const fetchItems = async () => {
    try {
      setState('loading');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const fetchedItems = await getAll();
      setItems(fetchedItems || []);
      setState('success');
    } catch (error:any) {
      setError(error);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState('error');
      throw error;
    }
  };

  const refresh = () => {
    fetchItems();
  };

  useEffect(() => {
    fetchItems();

    // Refresh items every 60 seconds
    const intervalId = setInterval(fetchItems, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Additional cleanup logic 
    return () => {
      // This cleanup function will run when the component is unmounted
    };
  }, []);

  return { items, state, error, refresh };
};

export {useBooks};