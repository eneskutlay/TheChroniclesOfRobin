import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useStoryQuestions from '../../../src/hooks/useStoryQuestions';
import Story from '../../../src/components/Story';

const StoryDetails = () => {
  const { questions, currentQuestionIndex, handleAnswerClick } = useStoryQuestions();

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text>Maybe Image Here</Text>
      </View>
      {questions.length > 0 && (
        <Story question={questions[currentQuestionIndex]} handleAnswerClick={handleAnswerClick} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    opacity: 0.2,
    height: 200,
  },
});

export default StoryDetails;
