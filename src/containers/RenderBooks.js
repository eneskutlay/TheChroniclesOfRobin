import { StyleSheet, View, Text } from 'react-native';
import Book from '../components/Book';
import getBooks from '../hooks/getBooks';
import LoadingAnimation from '../components/Animation';

function StoryBooks() {
  const [book, loading] = getBooks();

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <View style={styles.root}>
      <Book books={book} />
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
