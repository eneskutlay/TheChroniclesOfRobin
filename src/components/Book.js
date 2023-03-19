import { StyleSheet, Text, View } from 'react-native';

function Book(props) {
  const { stories } = props;

  return (
    <View style={styles.root}>
      {stories.map((story) => (
        <View style={styles.book} key={story._id}>
          <View style={styles.bookCover}>
            <View style={styles.bookInside}>
              <Text style={styles.title}>{story.storyName}</Text>
              <Text style={styles.storyAuth}>Auth: Enes</Text>
            </View>
          </View>
          <View>
            <Text style={styles.storyDesc}>{story.storyDesc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  book: {
    width: '31%',
  },
  bookCover: {
    height: 160,
    marginTop: 10,
    backgroundColor: '#005024',
  },
  bookInside: {
    // mybe use <LinearGradient /> package. https://docs.expo.io/versions/latest/sdk/linear-gradient/
    borderWidth: 1,
    borderColor: '#00753A',
    borderRadius: 2,
    width: '95%',
    height: '95%',
    alignSelf: 'center',
    margin: '4%',
    padding: '4%',
  },
  title: {
    fontSize: 10,
    color: 'white',
  },
  storyAuth: {
    fontSize: 10,
    color: 'white',
  },
  storyDesc: {
    fontSize: 9,
    color: 'white',
    marginTop: 2,
    marginBottom: 10,
  },
});

export default Book;
