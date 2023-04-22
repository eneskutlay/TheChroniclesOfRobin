import React, { useState, useEffect } from 'react';
import { API_URL } from '@env';

const useBooks = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const language = 'en';
  useEffect(() => {
    fetch(`${API_URL}${language}/books/`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);
  return [book, loading];
};

export default useBooks;
