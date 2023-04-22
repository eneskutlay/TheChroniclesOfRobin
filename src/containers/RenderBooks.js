import { StyleSheet, View, Text } from 'react-native';
import Book from '../components/Book';
import useBooks from '../hooks/getBooks';
import LoadingAnimation from '../components/Animation';

function RenderBooks() {
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

export default RenderBooks;
