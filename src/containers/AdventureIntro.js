import { StyleSheet, Text, View } from 'react-native';
import { Header, Description } from '../components/TextComponents';

function AdventureIntro() {
  let lorem =
    'Quisque erat mi, finibus ut gravida at, imperdiet a nibh. Quisque nisl est, venenatis eu lorem non, placerat aliquet libero. Fusce blandit magna a tincidunt lacinia. Vivamus maximus libero enim, quis interdum odio vestibulum at.';
  return (
    // data or static? && props?
    <View style={styles.container}>
      <Header title='Story Books' />
      <Description text={lorem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: '92%',
    alignSelf: 'center',
    gap: 10,
    marginHorizontal: 10,
  },
});

export default AdventureIntro;
