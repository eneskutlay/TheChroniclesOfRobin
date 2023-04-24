import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header, RootButton } from '@components';

function Credits() {
  return (
    <View style={styles.container}>
      <Header children={'Credits'} />
      <RootButton children={'Source Code'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: '40%',
  },
  detail: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default Credits;
