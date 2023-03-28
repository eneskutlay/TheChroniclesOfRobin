import React from 'react';
import { StyleSheet, View } from 'react-native';
import Book from '../components/Book';
import useStories from '../hooks/useStories';
import LoadingIndicator from '../components/LoadingIndicator';

function StoryBooks() {
  const [stories, loading] = useStories();

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.root}>
      <Book stories={stories} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
});

export default StoryBooks;
