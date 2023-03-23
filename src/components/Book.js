import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Book({ stories }) {
  const onBookPress = () => {
    console.log('Book pressed');
  };
  const renderStories = () => {
    return stories.map((story) => (
      <Pressable style={styles.book} key={story._id} onPress={() => onBookPress()}>
        <LinearGradient
          style={styles.bookCover}
          colors={['#005024', '#00753A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.bookInside}>
            <Text style={styles.title}>{story.storyName}</Text>
          </View>
        </LinearGradient>
        <View style={styles.storyDescContainer}>
          <Text style={styles.storyDesc}>{story.storyDesc}</Text>
        </View>
      </Pressable>
    ));
  };

  return <View style={styles.root}>{renderStories()}</View>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 25,
  },
  book: {
    width: '31%',
    marginBottom: 6,
  },
  bookCover: {
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookInside: {
    width: '100%',
    height: '100%',
    padding: '5%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  storyDescContainer: {
    padding: 2,
  },
  storyDesc: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Book;
