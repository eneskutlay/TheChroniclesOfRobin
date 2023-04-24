import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getIntro } from '@hooks';
import { IntroText, LoadingAnimation } from '@components';

function Intro() {
  const navigation = useNavigation();
  const [intro, loading] = getIntro();

  if (loading) {
    return <LoadingAnimation />;
  }

  const onStartPress = bookId => {
    navigation.navigate('Content', { id: bookId });
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: intro.bookIntroImageUrl,
        }}
        style={styles.introImage}
      />

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
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  introImage: {
    width: '100%',
    height: '50%',
    alignContent: 'center',
    resizeMode: 'stretch',
  },
  introContainer: {
    flex: 3,
  },
});

export default Intro;
