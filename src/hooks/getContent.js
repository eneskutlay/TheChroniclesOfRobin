import { useState, useEffect } from 'react';
import { usePathname } from 'expo-router';
import { API_URL } from '@env';
import * as Localization from 'expo-localization';

function getContent() {
  const pathname = usePathname();
  const [contents, setContents] = useState([]);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [language, setLanguage] = useState(Localization.getLocales()[0].languageCode);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}${language}${pathname}`);
        const data = await response.json();
        setContents(data);
        setCurrentContentIndex(0);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [pathname, setCurrentContentIndex]);

  function handleChoiceClick(choice) {
    const nextContentId = choice.nextContentId;
    const nextContenIndex = contents.findIndex(q => q.contentId === nextContentId);
    if (nextContenIndex !== -1) {
      setCurrentContentIndex(nextContenIndex);
    }
  }

  return { contents, currentContentIndex, handleChoiceClick };
}

export default getContent;
