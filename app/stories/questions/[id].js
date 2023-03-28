import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { usePathname } from 'expo-router'; //Link for going back to the previous page
import { API_URL } from '@env';

function Story() {
  const pathname = usePathname();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}${pathname}`);
      const data = await response.json();
      setQuestions(data);
    }
    fetchData();
  }, []);

  function handleAnswerClick(answer) {
    const nextQuestionId = answer.nextQuestionId;
    const nextQuestionIndex = questions.findIndex((q) => q.questionId === nextQuestionId);
    if (nextQuestionIndex !== -1) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.rootText}>{questions[currentQuestionIndex].questionText}</Text>
    </View>
  );
}

/*
      {questions.length > 0 && (
        <>
          <View style={styles.questionSection}>
            <Text style={styles.questionString}>
              {questions[currentQuestionIndex].questionText}
            </Text>
          </View>
          <View style={styles.answersSection}>
            {questions[currentQuestionIndex].answers.map((answer) => (
              <TouchableOpacity key={answer.answerId} onPress={() => handleAnswerClick(answer)}>
                <Text style={styles.answerString}>{answer.answerText}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

*/

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    width: '100%',
    height: 'auto',
    color: '#fff',
  },
  rootText: {
    color: '#fff',
  },
});

export default Story;
