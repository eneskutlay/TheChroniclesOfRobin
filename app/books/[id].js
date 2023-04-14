import { StyleSheet, Text, View, Image, Button } from 'react-native';
import getIntro from '../../src/hooks/getIntro';
import { useRouter } from 'expo-router';
import LoadingAnimation from '../../src/components/Animation';
import { IntroText } from '../../src/components/Texts';

function Intro() {
  const [intro, loading] = getIntro();
  const router = useRouter();

  if (loading) {
    return <LoadingAnimation />;
  }

  const onStartPress = bookId => {
    router.push({ pathname: '/books/content/[id]', params: { id: bookId } });
  };

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: intro.bookIntroImageUrl,
          }}
          style={styles.introImage}
        />
      </View>
      <View style={styles.introContainer}>
        <IntroText children={intro.bookIntro} />
        <Button
          onPress={() => onStartPress(intro.bookId)}
          title="Start the Story"
          color="#9F682B"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  introImage: {
    width: '100%',
    height: 350,
  },
  introContainer: {
    flex: 3,
  },
});

export default Intro;
