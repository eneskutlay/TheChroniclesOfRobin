import { StyleSheet, View, ActivityIndicator } from 'react-native';

const LoadingAnimation = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color="#999999" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingAnimation;
