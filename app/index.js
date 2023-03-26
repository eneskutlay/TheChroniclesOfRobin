import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

function RootPage() {
  return (
    <View style={styles.container}>
      <Text>Root Screen</Text>
      <Link href='/main'>Go to Main</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootPage;
