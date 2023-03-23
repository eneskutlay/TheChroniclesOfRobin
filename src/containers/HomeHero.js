import { StyleSheet, Text, View } from 'react-native';
import { Header, Description } from '../components/TextComponents';

function HomeHero() {
  return (
    // data or static? && props?
    <View style={styles.gameWrite}>
      <Header>Story Books</Header>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, nisl et ultricies
        lacinia, nisl nisl aliquet nisl, et aliquet nisl nisl sit amet nisl. Donec ultricies, nisl
        et ultricies lacinia, nisl nisl aliquet nisl, et aliquet nisl nisl sit amet nisl aasdas enes
        sd.
      </Description>
    </View>
  );
}

const styles = StyleSheet.create({
  gameWrite: {
    flex: 1,
    maxWidth: '92%',
    alignSelf: 'center',
    gap: 10,
  },
});

export default HomeHero;
