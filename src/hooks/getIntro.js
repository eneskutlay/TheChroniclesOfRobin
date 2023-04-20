import { useState, useEffect } from 'react';
import { API_URL } from '@env';
import { useRoute } from '@react-navigation/native';

const getIntro = () => {
  const route = useRoute();
  const { id } = route.params;
  const pathname = `/books/${id}`;
  const [intro, setIntro] = useState([]);
  const [loading, setLoading] = useState(true);
  const language = 'en';
  useEffect(() => {
    fetch(`${API_URL}/${language}${pathname}`)
      .then(response => response.json())
      .then(data => {
        setIntro(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);
  return [intro, loading];
};

export default getIntro;
