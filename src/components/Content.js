import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Story = ({ content, handleChoiceClick }) => {
  return (
    <>
      <View style={styles.container}>
        <Text
          style={[
            styles.content,
            {
              color: content.isFinal ? '#A4A7AE' : 'white',
              textAlign: content.isFinal ? 'center' : 'auto',
              marginTop: content.isFinal ? '25%' : 0,
            },
          ]}
        >
          {content.contentText}
        </Text>
        <View style={styles.answers}>
          {content.choices.map(choice => (
            <TouchableOpacity
              key={choice.choiceId}
              style={styles.answerContainer}
              onPress={() => handleChoiceClick(choice)}
            >
              <Text style={styles.answerText}>{choice.choiceText}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: '#1E1E1E',
  },
  content: {
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
