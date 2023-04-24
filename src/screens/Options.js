import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header } from '@components';

function Options() {
  return (
    <View style={styles.container}>
      <Header children={'Sorry'} />
      <Text style={styles.detail}>
        We do not support any customization at the moment, we will have new language support soon
      </Text>
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

export default Options;
