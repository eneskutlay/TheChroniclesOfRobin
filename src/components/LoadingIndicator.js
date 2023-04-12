import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#999999" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25%',
  },
});

export default LoadingIndicator;
