import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useStoryQuestions from '../../../src/hooks/useStoryQuestions';
import Story from '../../../src/components/Story';
import LoadingIndicator from '../../../src/components/LoadingIndicator';

const StoryDetails = () => {
  const [loading, setLoading] = useState(true);
  const { questions, currentQuestionIndex, handleAnswerClick } = useStoryQuestions();

  useEffect(() => {
    if (questions.length > 0) {
      setLoading(false);
    }
  }, [questions]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text>Maybe Image Here</Text>
      </View>
      <Story question={questions[currentQuestionIndex]} handleAnswerClick={handleAnswerClick} />
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
