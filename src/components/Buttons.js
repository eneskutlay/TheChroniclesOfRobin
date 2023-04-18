import { Link } from 'expo-router';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const BackButton = ({ href }) => (
  <Link href={href}>
    <View style={styles.backButton}>
      <Text>Back</Text>
    </View>
  </Link>
);

const RootButton = ({ children, press }) => (
  <Pressable style={styles.rootPressable} onPress={press}>
    <Text style={styles.pressableText}>{children}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  rootPressable: {
    width: '70%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'rgba(0, 105, 55, 1)',
    height: '15%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'rgba(217, 217, 217, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableText: {
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'left',
    color: '#fff',
  },
});

export { BackButton, RootButton };
