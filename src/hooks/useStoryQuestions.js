import { useState, useEffect } from "react";
import { usePathname } from "expo-router";
import { API_URL } from "@env";

function useStoryQuestions() {
  const pathname = usePathname();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}${pathname}`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [pathname]);

  function handleAnswerClick(answer) {
    const nextQuestionId = answer.nextQuestionId;
    const nextQuestionIndex = questions.findIndex(
      (q) => q.questionId === nextQuestionId
    );
    if (nextQuestionIndex !== -1) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  }

  return { questions, currentQuestionIndex, handleAnswerClick };
}

export default useStoryQuestions;
