import { useState, useEffect } from 'react';
import { API_URL } from '@env';
import { usePathname } from 'expo-router';

const getIntro = () => {
  const pathname = usePathname();
  const [intro, setIntro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}${pathname}`)
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
