import { StyleSheet, View } from 'react-native';
import StoryBooks from '../src/containers/StoryBooks';
import AdventureIntro from '../src/containers/AdventureIntro';

function IndexPage() {
  return (
    <View style={styles.root}>
      <View style={styles.hero}>
        <AdventureIntro />
      </View>
      <View style={styles.storyBooks}>
        <StoryBooks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    width: '100%',
    height: 'auto',
  },
  hero: {
    flex: 1,
    marginTop: '15%',
  },
  storyBooks: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8%',
  },
});

export default IndexPage;
