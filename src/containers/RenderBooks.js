import { StyleSheet, View, Text } from 'react-native';
import Book from '../components/Book';
import useBooks from '../hooks/useBooks';
import LoadingAnimation from '../components/Animation';

function StoryBooks() {
  const [books, loading] = useBooks();

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <View style={styles.root}>
      <Book books={books} />
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
