import { StyleSheet, View, ScrollView } from 'react-native';
import StoryBooks from '../../src/containers/StoryBooks';
import AdventureIntro from '../../src/containers/AdventureIntro';

function StoriesScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.hero}>
        <AdventureIntro />
      </View>
      <View style={styles.storyBooks}>
        <ScrollView style={styles.scrollView}>
          <StoryBooks />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#1E1E1E',
  },

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

export default StoriesScreen;
