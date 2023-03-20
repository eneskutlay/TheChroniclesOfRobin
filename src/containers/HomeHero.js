import { StyleSheet, Text, View } from 'react-native';
import { Header, Description } from '../components/TextComponents';

function HomeHero() {
  return (
    // data or static? && props?
    <View style={styles.root}>
      <Header>Story Books</Header>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, nisl et ultricies
        lacinia, nisl nisl aliquet nisl, et aliquet nisl nisl sit amet nisl. Donec ultricies, nisl
        et ultricies lacinia, nisl nisl aliquet nisl, et aliquet nisl nisl sit amet nisl.
      </Description>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '92%',
    marginTop: 20,
    alignSelf: 'center',
    gap: 10,
  },
});

export default HomeHero;
