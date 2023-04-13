import { StyleSheet, Text, View } from 'react-native';
import RenderBooks from '../../src/containers/RenderBooks';

function App() {
  return (
    <View style={styles.container}>
      <RenderBooks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
});

export default App;
