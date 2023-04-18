import { Button, StyleSheet, Text, View } from 'react-native';
import { BackButton } from '@components';

function Options() {
  return (
    <View style={styles.container}>
      <Text>Options</Text>
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

export default Options;
