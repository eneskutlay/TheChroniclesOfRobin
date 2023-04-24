import { StyleSheet, View, Text } from 'react-native';
import { LoadingAnimation, Book } from '@components';
import { getBooks } from '@hooks';

function RenderBooks() {
  const [books, loading] = getBooks();

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
