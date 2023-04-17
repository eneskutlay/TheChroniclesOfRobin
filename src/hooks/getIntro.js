import { useState, useEffect } from 'react';
import { API_URL } from '@env';
import { usePathname } from 'expo-router';
import * as Localization from 'expo-localization';

const getIntro = () => {
  const pathname = usePathname();
  const [intro, setIntro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(Localization.getLocales()[0].languageCode);
  console.log(`${API_URL}${language}${pathname}`);
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
