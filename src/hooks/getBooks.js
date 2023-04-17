import { useState, useEffect } from 'react';
import { API_URL } from '@env';
import * as Localization from 'expo-localization';

const getBooks = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(Localization.getLocales()[0].languageCode);
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

export default getBooks;
