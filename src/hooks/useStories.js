import { useState, useEffect } from "react";
import { API_URL } from "@env";

function useStories() {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/stories/`)
      .then((response) => response.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return [stories, loading];
}
console.log(`${API_URL}/stories/`)

export default useStories;
