import { Link } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

const BackButton = () => (
  <Link href="/books">
    <View style={styles.backButton}>
      <Text>Back</Text>
    </View>
  </Link>
);

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});

export default BackButton;
