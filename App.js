import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens/MainScreen.js';

const App = () => {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    hwight: 'auto',
  },
});

export default App;
