import { StyleSheet, Text, View } from 'react-native';
import { BackButton } from '@components';

function Credits() {
  return (
    <View style={styles.container}>
      <Text>Credits</Text>
      <BackButton href="/" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    width: '100%',
  },
});

export default Credits;
