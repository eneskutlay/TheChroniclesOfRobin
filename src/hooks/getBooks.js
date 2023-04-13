import { useState, useEffect } from 'react';
import { API_URL } from '@env';

const getBooks = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/books/`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);
  return [book, loading];
};

export default getBooks;
