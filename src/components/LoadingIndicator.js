import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='small' color='#999999' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '25%',
  },
});

export default LoadingIndicator;
