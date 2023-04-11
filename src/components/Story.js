import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackArrow from './BackArrow';

const Story = ({ question, handleAnswerClick }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.question}>{question.questionText}</Text>
        <View style={styles.answers}>
          {question.answers.map(answer => (
            <TouchableOpacity
              key={answer.answerId}
              style={styles.answerContainer}
              onPress={() => handleAnswerClick(answer)}
            >
              <Text style={styles.answerText}>{answer.answerText}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <BackArrow />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  answers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '90%',
    marginVertical: 10,
  },
  answerContainer: {
    width: '48%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerText: {
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'left',
    color: '#fff',
  },
});

export default Story;
