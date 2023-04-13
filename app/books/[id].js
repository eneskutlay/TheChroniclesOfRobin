import { StyleSheet, Text, View, Image, Button } from 'react-native';
import getIntro from '../../src/hooks/getIntro';
import { useRouter } from 'expo-router';

function Intro() {
  const [intro, loading] = getIntro();
  const router = useRouter();

  if (loading) {
    return <Text>Loading</Text>;
  }

  const onStartPress = bookId => {
    router.push({ pathname: '/books/content/[id]', params: { id: bookId } });
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: intro.bookIntroImageUrl,
        }}
        style={styles.introImage}
      />
      <Text style={styles.intro}>{intro.bookIntro}</Text>
      <Button
        onPress={() => onStartPress(intro.bookId)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center',
  },
  intro: {
    color: '#fff',
    fontSize: 24,
  },
  introImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});

export default Intro;
